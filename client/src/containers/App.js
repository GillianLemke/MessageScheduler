import React from 'react';
import { Route, Link } from 'react-router-dom'
import LoginPage from '../LoginPage.js'

const App = () => (
  <div>
    <header>
      <Link to="/login">Login</Link>
    </header>

    <main>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/login" component={LoginPage} />
    </main>
  </div>
)
