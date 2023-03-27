import React from 'react';
import { Link } from 'react-router-dom';

const DogList = ({ dogs }) => {
    return (
        <ul>
            {dogs.map(dog => (
                <li key={dog.name}>
                    <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
                    <img src={dog.src} alt={dog.name} width='50px'/>
                </li>
            ))}
        </ul>
    )
}

export default DogList;