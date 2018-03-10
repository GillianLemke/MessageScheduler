import React from 'react';
import './css/homepage.css';
import SideBar from './SideBar.js';
import NavBar from './NavBar.js';

export default class NewMessagePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleRepeatChange = this.handleRepeatChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    });
  }

  handleRepeatChange(event) {
    this.setState({
      repeat: event.target.value,
    });
  }

  handleEmailChange(event) {
    this.setState({
      email: event.target.value,
    });
  }

  handleTextChange(event) {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    console.log(this.state);
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

      <div className="screen">
        <h1 className="title">Create New Message</h1>
        <hr className="homescreen" />
        <div className="new-message-col-1">
        <form className="new-message-form">
          <input className="name-input" type="text" placeholder="name" onChange={this.handleNameChange} />
          <br/>
          <select className="repeat-input" defaultValue="0" onChange={this.handleRepeatChange}>
            <option value="0">Does Not Repeat</option>
            <option value="1">Yearly</option>
            <option value="2">Monthly</option>
            <option value="3">Weekly</option>
            <option value="4">Daily</option>
          </select>
          <br/>
          <label className="check-container">Email
            <input type="radio" defaultChecked name="radio" />
            <span className="checkmark"></span>
          </label>
          <label className="check-container second" disabled style={{cursor: "default", color: "#808080"}}>Text
            <input type="radio" name="radio" disabled style={{cursor: "default"}} />
            <span className="checkmark" disabled style={{cursor: "default"}}></span>
          </label>
          <br/>
          <input className="email-input" type="text" placeholder="email" onChange={this.handleEmailChange} />
          <textarea className="form-control text-input" id="text" rows="3" placeholder="message" onChange={this.handleTextChange}/>
          <button type="submit" className="btn btn-primary btn-md submit-message">SAVE</button>
        </form>
        </div>
      </div>
      <div className="footer-bar"></div>
      </div>
    );
  }
}
