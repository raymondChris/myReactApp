import React from 'react';
import './SideDrawerComponent.css';

const SideDrawerComponent = (props) => {
    return (
        <div className="SideDrawerComponent">
            <h4>Side Drawer Component</h4>
            <button onClick={props.addPerson} value='a'>Add Person</button>
            <button onClick={props.getInfo} value='b'>Get Information</button>
        </div>
    );
}

export default SideDrawerComponent;