import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="navbar">
        <img className="navbar-logo" src={require("./img/logo.png")} alt="logo" />
        <Link to={`/login`} className="logout-link">Logout</Link>
      </div>
    );
  }
}
