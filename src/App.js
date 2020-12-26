import React, { Component } from "react";
import earth from "./earth.png";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <h1>
          Find real problems, real easily. Sort by topic, date added, or likes.{" "}
        </h1>
        <button class="try">Search Now</button>
        <img className="earth" src={earth}></img>
      </div>
    );
  }
}
