import React from 'react';
import './css/login-page.css';

export default class LoginPage extends React.Component {
  render () {
    return (
      <div className="login-page">
        <img className="sign-in-logo" src={require("./img/logo.png")} alt="logo" />
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <button>login</button>
            <p className="message">Not registered? <a href="/signup">Signup here.</a></p>
          </form>
        </div>
      </div>
    );
  }
}
