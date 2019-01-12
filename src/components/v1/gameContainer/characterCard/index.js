import React from 'react';
import './characterCard.css';

function characterCard(prop){
    const character = prop.data;
    const guessChecker = prop.guessChecker;
    const altText = `Picture of ${character.name}`
    return(
           <div className="characterCard" data-name={character.name} onClick={() => guessChecker(character.name)} >
               <div><img src={character.name} alt={altText} /></div>
           {character.name}</div> 
    );
}

export default characterCard;