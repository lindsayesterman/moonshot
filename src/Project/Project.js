import React, { Component } from "react";
import "./Project.css";
import { Link } from "react-router-dom";

export default class Project extends Component {
  render() {
    return (
      <Link style={{textDecoration:'none'}} to={`/project`}>
        <div className="project">
          <h1>Name</h1>
          <h3>Description</h3>
        </div>
      </Link>
    );
  }
}
