import './App.css';

import React, { Component } from 'react';
import logo from './logo.svg';

import ReactMapGL from 'react-map-gl';

class App extends Component {
  state = {
    viewport: {
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
        <ReactMapGL
          {...this.state.viewport}
          onViewportChange={viewport => this.setState({ viewport })}
          mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
        />
      </div>
    );
  }
}

export default App;
