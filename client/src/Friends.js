import React from 'react';
import './css/homepage.css';
import SideBar from './SideBar.js';
import NavBar from './NavBar.js';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
      <NavBar />
      <SideBar
        homeClass={"sidebar-button"}
        newMessageClass={"sidebar-button"}
        friendsClass={"sidebar-button-active"}
        goldClass={"sidebar-button"}
        settingsClass={"sidebar-button"}
      />
      <div className="screen">friends page</div>
      <div className="footer-bar"></div>
      </div>
    );
  }
}
