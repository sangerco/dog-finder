import React from "react";
import { Link, useParams } from "react-router-dom";

const DogDetails = ({dogs}) => {
    const {name} = useParams();
    
    if (name) {
        const currentDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
        return (
            <div>
                <h1>{currentDog.name}</h1>
                <img src={currentDog.src} alt={currentDog.name} width='250px'/>
                <ul>
                    {currentDog.facts.map((fact, i) => <li key={i}>{fact}</li>)}
                </ul>
                <Link to='/dogs'>Go Back!</Link>
            </div>
        )
    }


}

export default DogDetails;