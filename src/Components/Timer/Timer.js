import { useState, useEffect, useRef } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Button, Card, CardHeader, CardBody } from 'reactstrap';
import './timer-styles.css';
import Horn from '../../resources/buzzer-horn.wav';
import ReactAudioPlayer from 'react-audio-player';


function Timer() {
  const [time, setTime] = useState(5000);
  const [timerOn, setTimerOn] = useState(false);
  const audioPlayer = useRef(null);

  useEffect(() => {
    let interval = null;

    if (timerOn && time !== 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => {
      clearInterval(interval)
    }
  })

  function playAudio() {
    audioPlayer.current.play();
  }

  return (
    <>
      <Container>
        <Row>
          <Card className='clock'>
            <CardHeader className='time-heading'>Time Remaining</CardHeader>
            <CardBody className='timer-display d-inline'>
              {time > 60001 && (
                <span className='m-1 clock'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
              )}
              <span className='m-1 clock'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
              {time < 60001 && (
                <span className='m-1 clock'>.{("0" + (time / 10) % 100).slice(-2)}</span>
              )}
              {time <= 100 && (
                <ReactAudioPlayer
                  src={Horn}
                  autoPlay
                />
              )}
            </CardBody>
          </Card>
        </Row>
      </Container>
      <div className='clock-controls'>
        {!timerOn && (
          <Button className='btn btn-success m-4' onClick={() => setTimerOn(true)}>Start</Button>
        )}
        {timerOn && (
          <Button className='btn btn-danger m-4' onClick={() => setTimerOn(false)}>Stop</Button>
        )}
        {!timerOn && (
          <Button className='btn btn-danger m-4' onClick={() => setTime(5000)}>Reset</Button>
        )}
        {!timerOn && (
          <>
            <Button onClick={playAudio}>Horn</Button>
            <audio ref={audioPlayer} src={Horn} />
          </>
        )}
      </div>
    </>
  )
}

export default Timer