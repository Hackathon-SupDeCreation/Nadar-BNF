import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Choices from './components/containers/Choices.js'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Choices />
      </div>
    );
  }
}

export default App;
