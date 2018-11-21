import React from 'react';
import './houseresult.css';

const getDisplayForHouse = (house) =>{
    switch(house){
        case 'gryffindor':
            return Gryffindor();
        case 'slytherin': 
            return Slytherin();
        case 'hufflepuff':
            return Hufflepuff();
        case 'ravenclaw':
            return Ravenclaw();
    }
}

const Gryffindor = () =>{
    return <div>
    <img src="https://vignette.wikia.nocookie.net/harrypotter/images/8/8e/0.31_Gryffindor_Crest_Transparent.png/revision/latest?cb=20161124074004" />
    <p>Gryffindor</p>
    <p>Bravery, Nerve, Courage, Chivalry, Daring</p>
    </div>
}

const Slytherin = () =>{
    return <div>
        <img src="https://vignette.wikia.nocookie.net/harrypotter/images/d/d3/0.61_Slytherin_Crest_Transparent.png/revision/latest?cb=20161020182557" />
        <p>Slytherin</p>
        <p>Resourcefulness, Cunning, Ambition, Determinantation, Self-Preservation, Fraternity, Cleverness </p>
    </div>
}

const Hufflepuff = () =>{
    return <div>
        <img src="https://vignette.wikia.nocookie.net/harrypotter/images/5/50/0.51_Hufflepuff_Crest_Transparent.png/revision/latest?cb=20161020182518" />
        <p>Hufflepuff</p>
        <p>Dedication, Hardworking, Fairness, Patience, Kindness, Tolerance, Unafraid of toil, Loyalty</p>
    </div>
}

const Ravenclaw = () =>{
    return <div>
        <img src="https://vignette.wikia.nocookie.net/harrypotter/images/2/29/0.41_Ravenclaw_Crest_Transparent.png/revision/latest?cb=20161020182442" />
        <p>Ravenclaw</p>
        <p>Intelligence, Wit, Wisdom, Creativity, Originality, Individuality, Acceptance </p>
    </div>
}

const HouseResult = (props) =>{
    return <div className='house-result'>You have been placed into:{getDisplayForHouse(props.house)}
        <a href="https://github.com/NehemiahK/" target="_blank">
        <img src="https://avatars2.githubusercontent.com/u/16864870?s=460&v=4" height="40"/>
        </a>
    </div>
}

export default HouseResult;