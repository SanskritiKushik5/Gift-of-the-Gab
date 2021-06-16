import { useState, useRef, useEffect } from 'react'
import Slider from './Slider'
import ControlPanel from '../Controls/ControlPanel'
import Mic from './Mic'
import {Col, Row, Card, Button, Nav} from 'react-bootstrap';
import { useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
import axios from "axios";
import { LinkContainer } from "react-router-bootstrap";

function Audioinput({details}) {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)
  const [card, setCard] = useState({});
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

  const submitPost = () => {
      {
        const exercise_name = card.exercise_name
        const description = card.description
        const thumbnail = card.thumbnail
        const customer = details.username
        console.log(exercise_name, description, thumbnail, customer);
        
         axios.post("http://127.0.0.1:8000/api/history/",{
           data: {
            exercise_name: exercise_name,
            description: description,
            thumbnail: thumbnail,
            customer: customer
           }
         });
        console.log("heyyyyyyyyyyyy")
      }
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
      <LinkContainer to="/exercise">
        <Nav.Link>
          <center>
            <Button onClick={submitPost} id="submit_post" variant="primary" className="btn x">Submit Recording</Button>
          </center>
        </Nav.Link>
      </LinkContainer>
      
    </div>
    </>
  )
}

export default Audioinput