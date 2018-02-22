import React from 'react';
import './css/homepage.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import SideBar from './SideBar.js';
import NavBar from './NavBar.js';

export default class NewMessagePage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="homepage">
      <NavBar />
      <SideBar
        homeClass={"sidebar-button"}
        newMessageClass={"sidebar-button-active"}
        friendsClass={"sidebar-button"}
        goldClass={"sidebar-button"}
        settingsClass={"sidebar-button"}
      />
      <div className="screen">new message page</div>
      <div className="footer-bar"></div>
      </div>
    );
  }
}
