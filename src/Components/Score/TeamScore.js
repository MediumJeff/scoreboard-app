import React from 'react'
import { useState } from 'react';
import './score-styles.css';


const TeamScore = () => {
    const [score, setScore] = useState(0);
    const [points, setPoints] = useState(0);
    let total = score + points;


    function addScore(e) {
        setPoints(Number(e.target.value))
        setScore(total)
    }

    function resetScore() {
        setScore(0)
        setPoints(0)
    }


    return (
        <>
            <div>
                <h2><input type='text' placeholder='Team Name'></input></h2>
                <span className='score-display'>{total}</span>
            </div>
            <div>
                <button className='score-button' value='1' onClick={addScore}>+1</button>
                <button className='score-button' value='2' onClick={addScore}>+2</button>
                <button className='score-button' value='3' onClick={addScore}>+3</button>
            </div>
            <div>
                <button className='score-button' value='-1' onClick={addScore}>-1</button>
                <button className='score-button' onClick={resetScore}>Reset</button>
            </div>
        </>
    )
}

export default TeamScore;