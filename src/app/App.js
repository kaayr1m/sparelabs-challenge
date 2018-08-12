import './App.css';
import logo from './logo.svg';

import React, { Component } from 'react';

import HomeContainer from './home/HomeContainer';

class App extends Component {
  state = {
    viewport: {
      // Vancouver Lat Long
      latitude: 49.24966,
      longitude: -123.11934,
      zoom: 8
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
