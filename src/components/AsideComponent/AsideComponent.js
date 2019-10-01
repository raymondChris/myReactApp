import React from 'react';
import "./AsideComponent.css";

const AsideComponent = (props) => {

    return(
        <div className="AsideComponent">
            <h4>Aside Component</h4>
            <p>Name</p>
            <input type="text" onChange={props.changedName} name="Name"/>
            <p>Age</p>
            <input type="text" onChange={props.changedAge} name="Age"/>
            <button  onClick={props.clicked}>OK</button>
        </div>
    );
}

export default AsideComponent;