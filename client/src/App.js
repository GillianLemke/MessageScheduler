import React, { Component } from 'react';
import './App.css';
import LoginPage from './containers/LoginPage.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginPage />
      </div>
    );
  }
}

export default App;
