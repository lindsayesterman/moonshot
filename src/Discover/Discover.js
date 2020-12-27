import React, { Component } from "react";
import "./Discover.css";
import Header from "../Header/Header";
import Project from '../Project/Project'

export default class Discover extends Component {
  render() {
    return (
      <div className="discover">
        <Header />
        <input
          type="search"
          className="search-bar"
          placeholder="Search.."
        ></input>
        <button type="submit">Search</button>
        <Project />
      </div>
    );
  }
}
