import React from 'react';

export default class SignupPage extends React.Component {
  render() {
    return (
      <div className="login-page">
        <img src={require("../public/logo.png")} alt="logo" />
        <div className="form">
          <form className="register-form">
            <input type="text" placeholder="first name"/>
            <input type="text" placeholder="last name"/>
            <input type="text" placeholder="email"/>
            <input type="text" placeholder="username"/>
            <input type="password" placeholder="password"/>
            <p className="password-requirements">Must contain 8 characters, letter, and symbol</p>
            <input type="password" placeholder="confirm password"/>
            <button>signup</button>
            <p className="message">Already registered? <a href="/login">Sign In.</a></p>
          </form>
        </div>
      </div>
    );
  }
}
