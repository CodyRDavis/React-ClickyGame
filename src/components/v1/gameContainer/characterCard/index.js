import React from 'react';
import './characterCard.css';

function characterCard(prop){
    const character = prop.data;
    const guessChecker = prop.guessChecker;
    const altText = `Picture of ${character.name}`

    console.log (character.image);
    return(
            <div className="characterCard" data-name={character.name} onClick={() => guessChecker(character.name)} >
                <img src={character.image} alt={altText} />
            </div>
    );
}

export default characterCard;