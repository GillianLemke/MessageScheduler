import React from 'react';
import './css/homepage.css';
import { BrowserRouter as Link } from "react-router-dom";
import SideBar from './SideBar.js';
import NavBar from './NavBar.js';
import MessagePreview from './MessagePreview.js';
import HorizontalScroll from 'react-scroll-horizontal';

export default class HomePage extends React.Component {

  componentDidMount() {
    let username = localStorage.getItem("username");
    this.props.getMessages(username);
  }

  static mapMessages(messages) {
    let i = 0;
    return messages.map(
      (message) => {
        return (
          <MessagePreview
            key={i++}
            to={message.to}
            time={message.time}
            text={message.text}
          />
        )
      });
  }

  render() {
    const { messages } = this.props;
    console.log(messages);
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
          <div className="scroll-downs">
            <div className="mousey">
              <div className="scroller"></div>
            </div>
          </div>
          {messages &&
            <HorizontalScroll className="scroll-container">
              {HomePage.mapMessages(messages)}
            </HorizontalScroll>
          }
          {!messages &&
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
