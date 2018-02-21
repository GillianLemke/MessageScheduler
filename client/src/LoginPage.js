import React from 'react';
import './css/login-page.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

import HomePage from './HomePage.js';

export default class LoginPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(event) {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      username: event.target.value,
    });
  }

  handlePasswordChange(event) {
    console.log(event.target.value);
    this.setState({
      ...this.state,
      password: event.target.value,
    });
  }

  handleLogin(username, password) {
    this.props.onLoginClick(username, password)
  }

  render () {
    console.log(this.props);
    const { onLoginClick, match } = this.props;
    return (
      <div className="login-page">
        <img className="sign-in-logo" src={require("./img/logo.png")} alt="logo" />
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="password" onChange={this.handlePasswordChange} />
            <Link to={`${match.url}home`}>
              <button onClick={() => onLoginClick(this.state.username, this.state.password)}>login</button>
            </Link>
            <p className="message">Not registered? <a href="/signup">Signup here.</a></p>
          </form>
        </div>
        <Route
          exact
          path={match.url}
          render={<HomePage />}
        />
      </div>
    );
  }
}
