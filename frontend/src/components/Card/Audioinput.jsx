import { useState, useRef } from 'react'
import audio from '../Audio/1.mp3';
import Slider from './Slider'
import ControlPanel from '../Controls/ControlPanel'
import {Col, Row, Card} from 'react-bootstrap';
import img from '../Images/sample.jpg';

function Audioinput() {
  const [percentage, setPercentage] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

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

  return (
    <div className='app-container'>
    <br></br>
    <div className='col-10'>
      <Row className='no-gutters'>
            <Col md={5} lg={5}  >
                <Card.Img src={img} />
            </Col>
            <Col>
                <Card.Body>
                <br></br>
                    <Card.Title>Pronounciation Exercise 3</Card.Title>
                    <Card.Text>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tincidunt odio vitae eros hendrerit venenatis.</p>
                        <small>Instructions: <br></br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a sapien facilisis, lacinia purus vel, varius magna. Maecenas non leo quam. Vivamus et nunc sagittis, convallis enim a, venenatis dui. Morbi sit amet diam felis. Aliquam erat volutpat. Aenean velit odio, rhoncus eget est quis, egestas tempus nunc.</small>
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
        src={audio}
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
    </div>
  )
}

export default Audioinput