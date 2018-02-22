import React from 'react';
import './css/homepage.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import SideBar from './SideBar.js';
import NavBar from './NavBar.js';

export default class Settings extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="homepage">
      <NavBar />
      <SideBar
        homeClass={"sidebar-button"}
        newMessageClass={"sidebar-button"}
        friendsClass={"sidebar-button"}
        goldClass={"sidebar-button"}
        settingsClass={"sidebar-button-active"}
      />
      <div className="screen">settings page</div>
      <div className="footer-bar"></div>
      </div>
    );
  }
}
