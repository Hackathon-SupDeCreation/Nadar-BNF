import React, { Component } from 'react'
import './App.css'
import AppHeader from './containers/AppHeader.js'
import BotPart from './containers/BotPart.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader />
        <BotPart />
      </div>
    );
  }
}

export default App
