import React from 'react';

function Scorebar(props) {
    let currentScore = props.currentScore
    let highScore = props.highScore
    return (
        <div>Score: {currentScore}        HighScore: {highScore}</div>
    )
}

export default Scorebar;