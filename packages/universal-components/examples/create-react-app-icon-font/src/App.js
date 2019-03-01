import React, { Component } from 'react';
import './App.css';

import { Icon } from "@kiwicom/universal-components";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div className="App-logo">
          <Icon name="airplane" color="#40A798" style={{fontSize: "10vh"}}/>
        </div>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
