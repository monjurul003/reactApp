import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './components/InputBox';

class App extends Component {

  
  render() {
    return (
     <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p className="Inside-para">
          Have some fun with oldies.......
        </p>
        <InputBox inputvalue = "Enter Name" />
      </div>

    );
  }
}

export default App;
