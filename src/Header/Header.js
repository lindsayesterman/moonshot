import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Link to="/">
          <h1 className="title">Project Finder</h1>
        </Link>
        <Link to="/discover">
          <h3 className="nav">Discover</h3>
        </Link>
        <Link to="/post">
          <h3 className="nav">Post</h3>
        </Link>
      </div>
    );
  }
}
