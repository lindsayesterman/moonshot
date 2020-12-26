import React, { Component } from "react";
import "./Discover.css";
import Header from "../Header/Header";

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
        <div className="project">
            <h1>Name</h1>
            <h3>Description</h3>
            <h4>Author</h4>
        </div>
      </div>
    );
  }
}
