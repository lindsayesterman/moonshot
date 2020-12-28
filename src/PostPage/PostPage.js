import React, { Component } from "react";
import Header from "../Header/Header.js";
import "./PostPage.css";

export default class Post extends Component { 
  state = {
    error:null,
  }

  handlePostProject = (e) => {
    e.preventDefault();
    const project = {
      name: e.target["name"].value,
      description: e.target["password"].value,
      features: e.target["features"].value,
      users: e.target["users"].value,
      author: e.target["author"].value
    }
  }

  render() {
    return (
      <div className="post">
        <Header />
        <form className="project-proposal" onSubmit={this.handlePostProject}>
          <h1 className="post-h1">Post a project</h1>
          <div className="form-input-material">
            <input
              type="text"
              name="project-name"
              id="name"
              placeholder="Screen Time Saver"
              required
            />
          </div>
          <div className="form-input-material">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="App that allows users to post weekly screentimes and compete with friends for the lowest times of the week."
              required
            />
          </div>
          <button type="submit" className="btn-post">
            Post
          </button>
        </form>
      </div>
    );
  }
}
