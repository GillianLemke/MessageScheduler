import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import LoginPage from './containers/LoginPage.js';

export default class App extends React.Component {
  render() {
    return (
      <div><LoginPage /></div>
    );
  }
}
