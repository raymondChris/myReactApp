import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    render () {
        return (
            <div className="cardPerson">
                <p>Mi chiamo {this.props.info.name}</p>
                <p>E ho {this.props.info.age} anni</p>
            </div>
        );
    }
}

export default Person;