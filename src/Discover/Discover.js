import React, { Component } from "react";
import "./Discover.css";
import Header from "../Header/Header";
import Project from "../Project/Project";
import PostsContext from "../postsContext";
import { Link } from "react-router-dom";

export default class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = { sort: "date" };

    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    this.setState({ value: event.target.value });
  }

  static contextType = PostsContext;

  render() {
    const { projects = [] } = this.context;
    return (
      <div className="discover">
        <Header />
        <select
          id="sort"
          value={this.state.value}
          onChange={this.handleSortChange}
        >
          <option value="date">Date Created</option>
          <option value="likes">Most liked</option>
          <option value="topic">Technology</option>
          <option value="academic">Academic</option>
          <option value="athletics">Athletics</option>
          <option value="art">Art/Music</option>
          <option value="community">Community Service</option>
          <option value="tech">Computer/Technology</option>
          <option value="social">Social</option>
          <option value="work">Work</option>
          <option value="other">Other</option>
        </select>
        <ul className="disover-projects">
          {projects.map((project) => (
            <Link to={`/projects/${project.id}`} key={project.id}>
              <Project
                name={project.name}
                description={project.description}
                id={project.id}
                key={project.id}
                {...project}
              />
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}
