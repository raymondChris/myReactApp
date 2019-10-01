import React, { Component } from 'react';
import './ListComponent.css';
import Person from '../Person/Person';

class ListComponent extends Component {
    render() {
        let person = null;
        if (this.props.people[0].id !== undefined) {
            person = this.props.people.map((value, index) => 
                <Person
                    key={index}
                    info={value}/>
            )
        } else {
            person = null;
        }

        return(
            <div className="ListComponent">
                <h4>List Component</h4>
                {person}
            </div>
        );
    }
}

export default ListComponent;