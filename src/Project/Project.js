import React, { Component } from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default class Project extends Component {
  render() {
    const x = window.matchMedia("(max-width:449px)");
    return (
      <div className="project">
        <h1>
        {!x.matches
          ? this.props.name
          : this.props.name.length > 15
          ? this.props.name.slice(0, 15) + "..."
          : this.props.name}
        </h1>
        <h3>{this.props.description}</h3>
      </div>
    );
  }
}
