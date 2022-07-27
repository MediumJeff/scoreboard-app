import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Card, CardBody } from 'reactstrap';
import './timer-styles.css';


function Timer() {
  const [time, setTime] = useState(70000);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn && time !== 0) {
      interval = setInterval(() => {
        setTime(prevTime => prevTime - 10)
      }, 10)
    } else {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  })

  return (
    <>
      <Container>
        <Row>
          <Card className='timer-display d-inline'>
            {time > 60001 && (
              <span className='m-1 clock'>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            )}
            <span className='m-1 clock'>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}</span>
            {time < 60001 && (
              <span className='m-1 clock'>.{("0" + (time / 10) % 100).slice(-2)}</span>
            )}
          </Card>
        </Row>
      </Container>
      <div>
        {!timerOn && (
          <Button className='btn btn-success m-4' onClick={() => setTimerOn(true)}>Start</Button>
        )}
        {timerOn && (
          <Button className='btn btn-danger m-4' onClick={() => setTimerOn(false)}>Stop</Button>
        )}
        {!timerOn && (
          <Button className='btn btn-danger m-4' onClick={() => setTime(70000)}>Reset</Button>
        )}
      </div>
    </>
  )
}

export default Timer