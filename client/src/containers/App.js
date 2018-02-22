import React from 'react';
import { Route } from 'react-router-dom';
import LoginPage from './LoginPage.js';
import SignupPage from '../SignupPage.js';
import HomePage from '../HomePage.js';
import NewMessagePage from '../NewMessagePage.js';
import Friends from '../Friends.js';
import Gold from '../Gold.js';
import Settings from '../Settings.js';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <main>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/new_message" component={NewMessagePage} />
          <Route exact path="/friends" component={Friends} />
          <Route exact path="/gold" component={Gold} />
          <Route exact path="/settings" component={Settings} />
        </main>
      </div>
    );

  }
}
