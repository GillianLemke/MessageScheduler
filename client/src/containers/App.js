import React from 'react';
import { Route, Link } from 'react-router-dom';
import LoginPage from '../LoginPage.js';
import SignupPage from '../SignupPage.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
        </main>
      </div>
    );

  }
}
