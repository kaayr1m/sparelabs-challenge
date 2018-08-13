import './App.css';

import React, { Component } from 'react';

import HomeContainer from './home/HomeContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Spare Labs Challenge</h1>
        </header>
        <HomeContainer />
      </div>
    );
  }
}

export default App;
