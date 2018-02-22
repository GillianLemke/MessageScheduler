import React from 'react';
import './css/homepage.css';
import { BrowserRouter as Route, Link } from "react-router-dom";
import SideBar from './SideBar.js';
import NavBar from './NavBar.js';

export default class HomePage extends React.Component {
  render() {
    const { match } = this.props;
    return (
      <div className="homepage">
        <NavBar />
        <SideBar
          homeClass={"sidebar-button-active"}
          newMessageClass={"sidebar-button"}
          friendsClass={"sidebar-button"}
          goldClass={"sidebar-button"}
          settingsClass={"sidebar-button"}
        />
        <div className="screen">
          <h1 className="title">Dashboard</h1>
          <hr className="homescreen" />
          {this.props.messages && <div>message here</div>}
          {!this.props.messages &&
            <div className="dashboard-message-container">
              <h1 className="no-messages">You have no scheduled messages</h1>
              <Link to={`/new_message`} className="create-new.link">
                <h3 className="create-new">Create a new one now!</h3>
              </Link>
            </div>
          }
          <hr className="homescreen" />
        </div>
        <div className="footer-bar"></div>
      </div>
    );
  }
}
