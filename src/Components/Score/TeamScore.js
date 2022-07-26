import { useState } from 'react';
import { Container, Row, Card, CardHeader, CardBody } from 'reactstrap';
import './score-styles.css';
import '../../App';

const TeamScore = (props) => {
    const [score, setScore] = useState(0);
    const [points, setPoints] = useState(0);
    let [timeout, setTimeout] = useState(3);
    let total = score + points;

    function addScore(e) {
        setPoints(Number(e.target.value))
        setScore(total)
    }

    function adjustTimeout(e) {
        setTimeout(timeout += (Number(e.target.value)))
    }

    function resetScore() {
        setScore(0)
        setPoints(0)
        setTimeout(3)
    }

    return (
        <>
            <Container>
                <Row className='score-display'>
                    <Card className='mt-3'>
                        <CardHeader>
                            <h2 className='team-name text-center'>{props.teamName}</h2>
                        </CardHeader>
                        <CardBody>
                            <span className='score-total'>{total}</span>
                            <p className='mb-0 time-outs'>Timeouts: {timeout}</p>
                        </CardBody>
                    </Card>
                </Row>
                <Row className='score-controls'>
                    <div>
                        <button className='score-button' value='1' onClick={addScore}>+1</button>
                        <button className='score-button' value='2' onClick={addScore}>+2</button>
                        <button className='score-button' value='3' onClick={addScore}>+3</button>
                    </div>
                    <div>
                        <button className='score-button' value='-1' onClick={addScore}>-1</button>
                        <button className='score-button' onClick={resetScore}>Reset</button>
                    </div>
                    <div>
                        <p>Time Out: <button className='score-button' value='-1' onClick={adjustTimeout}>-</button>
                        <button className='score-button' value='1' onClick={adjustTimeout}>+</button></p>
                    </div>
                </Row>
            </Container>
        </>
    )
}

export default TeamScore