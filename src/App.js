import React, { Component } from 'react';
import './App.css';
import SideDrawerComponentv from "./components/SideDrawerComponent/SideDrawerComponent";
import ListComponent from "./components/ListComponent/ListComponent";
import AsideComponent from './components/AsideComponent/AsideComponent';
import HeaderComponent from './components/HeaderComponent/HeaderComponent';

class App extends Component {
  state = {
    asideComponentWindow : false,
  }

  formAsideHandler = () => {
    const isItVisible = this.state.asideComponentWindow;
    this.setState({asideComponentWindow : !isItVisible});
  }

  render() {
    return (
        <div className="App">
        <HeaderComponent/>
        <SideDrawerComponentv clicked={this.formAsideHandler}/>
        <ListComponent/>
        {this.state.asideComponentWindow ?
          <AsideComponent/> :
          null}
      </div>
    );
  }
}

export default App;
