import React, { Component } from 'react';

class Person extends Component {
    render () {
        return (
            <div>
                <p>Mi chiamo {this.props.info.name}</p>
                <p>E ho {this.props.info.age} anni</p>
            </div>
        );
    }
}

export default Person;