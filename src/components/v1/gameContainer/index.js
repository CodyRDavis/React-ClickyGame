import React, {Component} from 'react';
import './gameContainer.css'

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
                name: "Bowser Jr",
                image: "https://avatarfiles.alphacoders.com/160/thumb-160375.png"
            },
            {
                name: "MetaKnight",
                image: "https://avatarfiles.alphacoders.com/166/thumb-166155.jpg"
            },
            {
                name: "Lucas",
                image: "https://avatarfiles.alphacoders.com/161/thumb-161027.jpg"
            },
            {
                name: "Bayonetta",
                image: "https://avatarfiles.alphacoders.com/159/thumb-159750.png"
            },
            {
                name: "Isabelle",
                image: "https://avatarfiles.alphacoders.com/168/thumb-168582.jpg"
            },
            {
                name: "Link",
                image: "https://avatarfiles.alphacoders.com/709/thumb-70920.jpg"
            },
            {
                name: "Mario",
                image: "https://avatarfiles.alphacoders.com/741/thumb-74184.jpg"
            },
            {
                name: "Captain Falcon",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163101.png"
            },
            {
                name: "Chrom",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163117.png"
            },
            {
                name: "Cloud",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163126.png"
            },
            {
                name: "Daisey",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163132.png"
            },
            {
                name: "King Deedeedee",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163142.png"
            },
            {
                name: "Diddy Kong",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163148.png"
            },
            {
                name: "Donkey Kong",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163158.png"
            },
            {
                name: "Duck Hunt",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163162.png"
            },
            {
                name: "Falco",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163175.png"
            },
            {
                name: "Fox",
                image: "https://avatarfiles.alphacoders.com/163/thumb-163184.png"
            },
            {
                name: "Samus",
                image: "https://cdn-images-1.medium.com/max/1600/1*xv-6VKkaFh0lfao_bjG4Tw.png"
            }
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
            //alert("Havent Guessed them before");
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
                <div className="characterDeck">
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