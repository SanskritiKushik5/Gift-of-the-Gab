import { useState, useRef, useEffect } from 'react'
import Slider from './Slider'
import ControlPanel from '../Controls/ControlPanel'
import Mic from './Mic'
import {Col, Row, Card, Button, Form} from 'react-bootstrap';
import { useParams } from "react-router-dom";
import axios from "axios";
import swal from 'sweetalert';

var x = 0;
function Audioinput({customer}) {

  window.scrollTo(0, 0)

  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [card, setCard] = useState({});
  // const [count, setCount] = useState({
  //   count: 1,
  //   customer: customer,
  // })
  const { id } = useParams();
  const audioRef = useRef()
  const onChange = (e) => {
    const audio = audioRef.current
    audio.currentTime = (audio.duration / 100) * e.target.value
    setPercentage(e.target.value)
  }

  const play = () => {
    const audio = audioRef.current
    audio.volume = 0.1

    if (!isPlaying) {
      setIsPlaying(true)
      audio.play()
    }

    if (isPlaying) {
      setIsPlaying(false)
      audio.pause()
    }
  }

  const getCurrDuration = (e) => {
    const percent = ((e.currentTarget.currentTime / e.currentTarget.duration) * 100).toFixed(2)
    const time = e.currentTarget.currentTime

    setPercentage(+percent)
    setCurrentTime(time.toFixed(2))
  }
  useEffect(() => {
    loadCard();
  }, []);
  const loadCard = async () => {
    const result = await axios.get(`http://127.0.0.1:8000/api/card/${id}`);
    setCard(result.data);
  }
  const postCount = async () => {
    await axios.post(`http://127.0.0.1:8000/api/count_add/`, {
        count: 1,
        customer: customer,
    });
  }
  const putCount = async (x) => {
    console.log(customer)
    // setCount({
    //   count: x,
    //   customer: customer,
    // })
    await axios.put(`http://127.0.0.1:8000/api/count/${customer}/`, {
      count: x,
      customer: customer
    });
  }
  const loadCount = async () => {
    fetch(`http://127.0.0.1:8000/api/count/${customer}`, {method: "GET"})
    .then(async response => {
      const data = await response.json();
      if (response.ok) {
        x = data.count;
        putCount(x+1);
      }else{
        postCount();
      }
    });
  }

  const onSubmit = async (e) => {
		e.preventDefault();
    //var aud = localStorage.getItem('audio')
    //console.log(aud)

    // const formData = new FormData();
    // formData.append('audio-file', aud);

    // await axios.post('http://127.0.0.1:8000/api/outputaudio/', {
    //   input_audio: `http://127.0.0.1:8000${card.audio}`,
    //   output_audio: formData,
    //   customer: customer,
    //   card_id: id,
    // });

    // var mp3fromblob = new File([aud], "incomingaudioclip.mp3");
    // console.log(mp3fromblob.mp3, typeof(mp3fromblob))

    // fetch({
    //   method: 'post',
    //   url: 'http://127.0.0.1:8000/api/outputaudio/',
    //   data: {
    //     output: mp3fromblob
    //   }
    // })

    // await axios.post('http://127.0.0.1:8000/api/outputaudio/', {
    //   output: 'incomingaudioclip.mp3'
    // });

    var bool = true
    await axios.post('http://127.0.0.1:8000/api/weekstreak/', {
      customer: customer,
      day_count: bool,
    });

		await axios.post('http://127.0.0.1:8000/api/history/', {
      exercise_name: card.exercise_name,
      thumbnail: `http://127.0.0.1:8000${card.thumbnail}`,
      description: card.description,
      customer: customer,
      card_id: id,
    });

    loadCount();
    swal({
      title: "Submitted Successfully!",
      text: "Well done! Keep Practicing!",
      icon: "success",
    });
	}
  return (
    <>
    <div className='app-container'>
    <br></br>
    <div className='col-10'>
      <Row className='no-gutters'>
            <Col md={4} lg={4}  >
                <Card.Img className='exe-img' id="cardImg" src={`http://127.0.0.1:8000${card.thumbnail}`}/>
            </Col>
            <Col>
                <Card.Body>
                <br></br>
                    <Card.Title id="cardTitle">{card.exercise_name}</Card.Title>
                    <Card.Text>
                    <pre>
                        <p className="flex-container" id="cardDesc">{card.description}</p>
                        <small className="flex-container">Instructions: <br></br>{card.instructions}</small>
                    </pre>
                    </Card.Text>
                </Card.Body>
            </Col>
        </Row>
    </div>
      <Slider percentage={percentage} onChange={onChange} />
      <audio
        ref={audioRef}
        onTimeUpdate={getCurrDuration}
        onLoadedData={(e) => {
          setDuration(e.currentTarget.duration.toFixed(2))
        }}
        src={`http://127.0.0.1:8000${card.audio}`}
      ></audio>
      <ControlPanel
        play={play}
        isPlaying={isPlaying}
        duration={duration}
        currentTime={currentTime}
      />
      <br></br>
      <div className='col-10'>
        <h3 align="center">- Start Recording -</h3>
        <p align="center">Follow the instructions and attempt the exercise by starting the recorder...</p>
      </div>
      <Mic />
      <Form onSubmit={e => onSubmit(e)}>
        <center>
        <Button variant="primary" type="submit" className="btn x">Submit Recording</Button>
        </center>
      </Form>
    </div>
    </>
  )
}

export default Audioinput