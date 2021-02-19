import React, { Component } from "react";
import "./Discover.css";
import Header from "../Header/Header";
import Project from "../Project/Project";
import ProjectsContext from "../ProjectsContext";
import { Link } from "react-router-dom";
import { sortBy } from "lodash";

export default class Discover extends Component {
  static contextType = ProjectsContext;

  constructor(props) {
    super(props);
    this.state = {
      value: "date",
      sortedResults: this.props.projects,
      searched: "",
    };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  handleSortChange(event) {
    let sortedResults;
    const topicClicked = event.target.value;
    if (event.target.value === "recent") {
      sortedResults = sortBy(this.context.projects, ["date_created"]).reverse();
    } else if (event.target.value === "old") {
      sortedResults = sortBy(this.context.projects, ["date_created"]);
    } else if (event.target.value === "alpha") {
      sortedResults = sortBy(this.context.projects, ["name"]);
    } else {
      const projectWithTopic = (projects = [], projectTopic) =>
        projects.filter((project) => project.topic === projectTopic);
      sortedResults = projectWithTopic(this.context.projects, topicClicked);
    }
    this.setState({ value: event.target.value, sortedResults });
  }

  handleSearchProject = (e) => {
    e.preventDefault();
    const { searched } = this.state;
    const projectsFoundFromSearch = (projects = [], projectName) =>
      projects.filter((project) => project.name.toLowerCase().includes(projectName.toLowerCase()));
    let sortedResults = projectsFoundFromSearch(this.props.projects, searched);
    this.setState({ sortedResults });
  };

  updateSearchHandle = (e) => {
    this.setState({ searched: e.target.value });
  };

  render() {
    const projects = this.state.sortedResults || this.context.projects;
    return (
      <div className="discover">
        <Header />
        <form onSubmit={(e) => this.handleSearchProject(e)}>
          <input
            type="text"
            name="searched"
            id="searched"
            onChange={this.updateSearchHandle}
            placeholder="Screentime Saver"
          ></input>
          <button className="subSearch" type="submit">
            Search
          </button>
        </form>
        <select
          id="sort"
          value={this.state.value}
          onChange={this.handleSortChange}
        >
          <option value="recent">Most Recent</option>
          <option value="old">Oldest</option>
          <option value="alpha">Alphabetical</option>
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
            <Link
              to={`/projects/${project.id}`}
              key={project.id}
              style={{ textDecoration: "none" }}
            >
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
