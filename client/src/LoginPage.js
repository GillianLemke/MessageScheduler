import React from 'react';
import './css/login-page.css';

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

  render () {
    console.log(this.props);
    const { onLoginClick } = this.props;
    return (
      <div className="login-page">
        <img className="sign-in-logo" src={require("./img/logo.png")} alt="logo" />
        <div className="form">
          <form className="login-form">
            <input type="text" placeholder="username" onChange={this.handleUsernameChange} />
            <input type="password" placeholder="password" onChange={this.handlePasswordChange} />
            <button onClick={() => onLoginClick(this.state.username, this.state.password)}>login</button>
            <p className="message">Not registered? <a href="/signup">Signup here.</a></p>
          </form>
        </div>
      </div>
    );
  }
}
