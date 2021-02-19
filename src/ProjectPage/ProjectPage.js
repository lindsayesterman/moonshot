import React, { Component } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import { findProject } from "../helper.js";
import ProjectsContext from '../ProjectsContext.js'

export default class ProjectPage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = ProjectsContext;

  render() {
    const { projects = [] } = this.props
    const { projectId } = this.props.match.params;
    const project = findProject(projects, parseFloat(projectId))
    return (
      <div className="project-page">
        <Header />
        <div className="container-info">
        <h1 className="info">{project.name}</h1>
        <h3 className="info">Description: {project.description}</h3>
        <h3 className="info">Features: {project.features}</h3>
        <h3 className="info">Topic: {project.topic}</h3>
        <h3 className="info">Creator: {project.author}</h3>
        {/* <p className="info">Likes:</p> */}
        </div>
      </div>
    );
  }
}
