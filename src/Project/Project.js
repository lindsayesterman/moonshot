import React, { Component } from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default class Project extends Component {
  render() {
    return (
        <div className="project">
          <h1>{this.props.name}</h1>
          <h3>{this.props.description}</h3>
        </div>
    );
  }
}
