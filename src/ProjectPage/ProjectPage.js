import React, { Component } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";

export default class ProjectPage extends Component {
  render() {
    return (
      <div className="project-page">
        <Header />
        <div className="container-info">
        <h1 className="info">Name</h1>
        <h3 className="info">Description of project</h3>
        <h3 className="info">Features:</h3>
        <h3 className="info">Users:</h3>
        <h4 className="info">Author:</h4>
        <p className="info">Likes:</p>
        </div>
      </div>
    );
  }
}
