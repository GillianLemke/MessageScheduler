import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginPage from '../LoginPage.js'

export default class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/login">Login</Link>
        </header>

        <main>
          <Route exact path="/" component={LoginPage} />
          <Route exact path="/login" component={LoginPage} />
        </main>
      </div>
    );

  }
}
