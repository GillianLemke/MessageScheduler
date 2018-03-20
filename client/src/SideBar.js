import React from 'react';
import './css/homepage.css';
import { BrowserRouter as Route, Link } from "react-router-dom";

export default class HomePage extends React.Component {
  render() {
    const {
      homeClass,
      newMessageClass,
      friendsClass,
      goldClass,
      settingsClass,
    } = this.props;
    return (
      <div className="sidebar-nav">
        <h1 className="message">Welcome back!</h1>
        <hr className="sidebar" />
        <Link to={`/home`}>
          <div className="button-container"><button className={homeClass}>Dashboard</button></div>
        </Link>
        <Link to={`/new_message`}>
          <div className="button-container"><button className={newMessageClass}>New Message</button></div>
        </Link>
        <Link to={`/friends`}>
          <div className="button-container"><button className={friendsClass}>Friends</button></div>
        </Link>
        <Link to={`/gold`}>
          <div className="button-container"><button className={goldClass}>REO Gold</button></div>
        </Link>
        <Link to={`/settings`}>
          <div className="button-container"><button className={settingsClass}>Settings</button></div>
        </Link>
      </div>
    );
  }
}
