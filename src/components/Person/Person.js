import React from 'react';
import './Person.css';

const Person = (props) => {
        return (
            <div className="cardPerson">
                <p>Mi chiamo {props.info.name}</p>
                <p>E ho {props.info.age} anni</p>
            </div>
        );
    
}

export default Person;