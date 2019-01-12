import React from 'react';
import './scorebar.css';

function Scorebar(props) {
    let currentScore = props.currentScore
    let highScore = props.highScore
    return (
        <div className="scorebar">
            <div className="scoreBoard">
                <ul className="clearfix">
                    <li>Score: {currentScore}</li>
                    <li>HighScore: {highScore}</li>
                </ul>
            </div>
        </div>
    )
}

export default Scorebar;