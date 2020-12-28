import React, { Component } from "react";
import "./Discover.css";
import Header from "../Header/Header";
import Project from "../Project/Project";
import Post from "../PostPage/PostPage";
import PostsContext from "../postsContext";
import { Link } from 'react-router-dom'

export default class Discover extends Component {
  static contextType = PostsContext;

  render() {
    const { projects = [] } = this.props;
    return (
      <div className="discover">
        <Header />
        <input
          type="search"
          className="search-bar"
          placeholder="Search.."
        ></input>
        <button type="submit">Search</button>
        <ul className="disover-projects">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
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
