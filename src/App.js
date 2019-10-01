import React, { Component } from 'react';
import './App.css';
import SideDrawerComponent from "./components/SideDrawerComponent/SideDrawerComponent";
import ListComponent from "./components/ListComponent/ListComponent";
import AsideComponent from './components/AsideComponent/AsideComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AnotherAsideComponent from './components/AnotherAsideComponent/AnotherAsideComponent';

class App extends Component {
  state = {
    people: [{
    }],
    anotherAsideComponent : false,
    asideComponentWindow : false,
    peopleCounter: 0,
  }

  
  
  personName = undefined;
  personAge = undefined;
  arrayPeople = [];

  formAsideHandler = (event) => {
    const prova = {...this.state};
    switch (event.target.value) {
      case 'a' : this.setState({asideComponentWindow: !prova.asideComponentWindow,
                                anotherAsideComponent: false});
                  break;
      case 'b' : this.setState({asideComponentWindow: false,
                                anotherAsideComponent: !prova.anotherAsideComponent});
                  break;
      default:
        alert('come?');
    } 
  };

  varNameHandler = (event) => {
    this.personName = event.target.value;
  }

  varAgeHandler = (event) => {
    this.personAge = event.target.value;
  }

  whichAsideHander = () => {
    if ( !this.state.asideComponentWindow && !this.state.anotherAsideComponent) {
      return null;
    } else {
      if (this.state.asideComponentWindow) {
        return <AsideComponent
                changedName={(event) => this.varNameHandler(event)}
                changedAge={(event) => this.varAgeHandler(event)}
                clicked={this.addPersonHandler}/>
        } else {
        return <AnotherAsideComponent/>
        }
      }
  };

  addPersonHandler = () => {
      let objectPerson = 
      {
        id: this.state.peopleCounter,
        name: this.personName,
        age: this.personAge,
      };
      //counter = this.state.peopleCounter+1;
      this.arrayPeople.push(objectPerson);
      this.setState({people: [...this.arrayPeople], peopleCounter: this.state.peopleCounter+1});
  }

  render() {
    return (
        <div className="App">
        <HeaderComponent/>
        <SideDrawerComponent
          addPerson={(event) => this.formAsideHandler(event)}
          getInfo={(event) => this.formAsideHandler(event)}/>
        <ListComponent
          people={this.state.people}/>
        {this.whichAsideHander()}
      </div>
    );
  }
}

export default App;