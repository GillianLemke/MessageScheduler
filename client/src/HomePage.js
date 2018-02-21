import React from 'react';
import './css/homepage.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

export default class HomePage extends React.Component {

  // TODO: make action/reducer for logout
  render() {
    const { match } = this.props;
    return (
      <div className="homepage">
      <div className="navbar">
        <img className="navbar-logo" src={require("./img/logo.png")} alt="logo" />
        <Link to={`${match.url}login`} className="logout-link"><a href="/login">Logout</a></Link>
      </div>
      <div className="sidebar-nav">
        <h1 className="message">Welcome back!</h1>
        <hr className="sidebar" />
        <div className="button-container"><button className="sidebar-button-active">Dashboard</button></div>
        <div className="button-container"><button className="sidebar-button">New Message</button></div>
        <div className="button-container"><button className="sidebar-button">Friends</button></div>
        <div className="button-container"><button className="sidebar-button">REO Gold</button></div>
        <div className="button-container"><button className="sidebar-button">Settings</button></div>
      </div>
      <div className="screen"></div>
      <div className="footer-bar"></div>
      </div>
    );
  }
}
