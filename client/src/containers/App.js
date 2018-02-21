import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import SignupPage from '../SignupPage.js';
import HomePage from '../HomePage.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/home" component={HomePage} />
        </main>
      </div>
    );

  }
}
