import React, { Component } from 'react';
import './App.css';
import SideDrawerComponentv from "./components/SideDrawerComponent/SideDrawerComponent";
import ListComponent from "./components/ListComponent/ListComponent";
import AsideComponent from './components/AsideComponent/AsideComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import AnotherAsideComponent from './components/AnotherAsideComponent/AnotherAsideComponent';

class App extends Component {
  state = {
    anotherSideComponent : false,
    asideComponentWindow : false,
  }

  formAsideHandler = (event) => {
    const prova = {...this.state};
    switch (event.target.value) {
      case 'a' : console.log(prova.asideComponentWindow + " e poi " + prova.anotherSideComponent)
                  this.setState({asideComponentWindow: !prova.asideComponentWindow,
                                anotherSideComponent: false});
                  break;
      case 'b' : this.setState({asideComponentWindow: false,
                                anotherSideComponent: !prova.anotherSideComponent});
                    console.log(this.state.anotherSideComponent);
                  break;
      default:
        alert('come?');
    } 
    console.log('è stato clickato '+ event.target.value);
  };

  whichAsideHander = () => {
    if ( !this.state.asideComponentWindow && !this.state.anotherSideComponent) {
      return null;
    } else {
      if (this.state.asideComponentWindow) {
        return <AsideComponent/>
        } else {
        return <AnotherAsideComponent/>
        }
      }
  };

  render() {
    return (
        <div className="App">
        <HeaderComponent/>
        <SideDrawerComponentv
          addPerson={(event) => this.formAsideHandler(event)}
          getInfo={(event) => this.formAsideHandler(event)}/>
        <ListComponent/>
        {this.whichAsideHander()}
      </div>
    );
  }
}

export default App;
