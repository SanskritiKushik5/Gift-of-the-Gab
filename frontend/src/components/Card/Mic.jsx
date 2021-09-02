import React from 'react'
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'
import "./Mic.css";

class Mic extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }

  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }

  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
    console.log(data, data.blob)
    const aud = data.blob
    console.log('Blob type', typeof (aud))
  }

  render() {
    const { recordState } = this.state

    return (
      <div className="container recorder">
        <div className="controls">
          <button id='record' onClick={this.start}>
            Start
          </button>
          <button id='pause' onClick={this.pause}>
            Pause
          </button>
          <button id='stop' onClick={this.stop}>
            Stop
          </button>
        </div>
        <audio
          className="container mic-rec"
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        <div className="rec">
          <AudioReactRecorder
            className="audio-rec"
            type="audio/mpeg"
            state={recordState}
            onStop={this.onStop}
            backgroundColor='rgb(255,255,255)'
          />
        </div>
      </div>
    )
  }
}

export default Mic

