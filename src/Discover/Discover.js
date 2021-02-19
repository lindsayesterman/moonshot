import React, { Component } from "react";
import "./Discover.css";
import Header from "../Header/Header";
import Project from "../Project/Project";
import PostsContext from "../postsContext";
import { Link } from "react-router-dom";

export default class Discover extends Component {
  static contextType = PostsContext;

  constructor(props) {
    super(props);
    this.state = { value: "date", sortedResults: this.props.projects };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  // lodash npm i lodash import {sortBy} from 'lodash' sortBy(this.context.project, 'date_created')
  handleSortChange(event) {
    const sortedResults = this.context.projects.sort((left, right) => {
      console.log(this.context.project);
      // if (left.this.context.project.id) {
      //   return -1;
      // } else if (right.this.context.project.id) {
      //   return 1;
      // } else {
      //   return 0;
      // }
    });
    this.setState({ value: event.target.value, sortedResults });
  }

  render() {
    const projects = this.state.sortedResults;
    console.log(projects);
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
            <Link to={`/projects/${project.id}`} key={project.id} style={{ textDecoration: 'none' }}>
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
