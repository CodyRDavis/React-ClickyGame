import React, {Component} from 'react';

//components
import CharacterCard from './characterCard';
import Scorebar from './scorebar';

class gameContainer extends Component {
    state = {
        currentScore: 0,
        highScore: 0,
        currentGuess: "",
        previousGuess: [],
        characterList: [
            {
                name: "Eric",
                image: ""
            },
            {name: "Erik"},
            {name: "James"}
        ]
    }

    //for development only
    statePrint(){
        console.log(this.state);
    }

    //resets the tracked variables so the game can start over
    gameReset(){
        this.setState({
            currentScore: 0,
            previousGuess: []
        });
    }
    
    //randomly changes the order in which characters are in the array.
    //couldnt get a concat splice to work... ask Eric.
    scrambleList(){
        let newList = [];
        let oldList = this.state.characterList;
        let length = this.state.characterList.length;

        for (let i = 0; i<length; i++){

            let selected = Math.floor(Math.random()*oldList.length);
            let element = oldList.splice(selected,1);
            newList.push(element[0]);
        }
        //setting state to the new scrambled list
        this.setState({characterList: newList});

    }

    //Checks to see if item clicked has been clicked before.
    //if yes, game over. reset.
    //if not, score goes up, item clicked added to list
    guessChecker = (name) => {

        //check to see if button clicked is someone guessed before.
        //if NOT guessed before, add them to previousGuess'
        //if guessed before, game over.
        if(!this.state.previousGuess.includes(name)){
            //updating state to reflect new guess and score increase
            this.setState({
                previousGuess: [...this.state.previousGuess, name],
                currentScore: this.state.currentScore + 1
            })
            alert("Havent Guessed them before");
        }else{
            if (this.state.currentScore > this.state.highScore){
                this.setState({
                    highScore: this.state.currentScore
                });
            }
            alert("You have guessed them before. Game over....man");

            //resetting the variables so the game can start again.
            this.gameReset();
        }

        this.scrambleList();

    }

    render(){
        return(
            <div>
                <Scorebar 
                    currentScore={this.state.currentScore}
                    highScore={this.state.highScore}
                />
                <div>
                    {this.state.characterList.map( (character, index) => (
                        <CharacterCard 
                            key={index}
                            data={character} 
                            guessChecker={this.guessChecker} 
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default gameContainer;