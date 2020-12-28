import React, { Component } from "react";
import "./ProjectPage.css";
import Header from "../Header/Header";
import { findProject } from "../helper.js";
import PostsContext from '../postsContext.js'

export default class ProjectPage extends Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };

  static contextType = PostsContext;

  render() {
    const { projects = [] } = this.context
    const { projectId } = this.props.match.params;
    const project = findProject(projects, parseFloat(projectId))
    return (
      <div className="project-page">
        <Header />
        <div className="container-info">
        <h1 className="info">{project.name}</h1>
        <h3 className="info">{project.description}</h3>
        <h3 className="info">{project.features}</h3>
        <h3 className="info">{project.topic}</h3>
        <h4 className="info">{project.author}</h4>
        {/* <p className="info">Likes:</p> */}
        </div>
      </div>
    );
  }
}
