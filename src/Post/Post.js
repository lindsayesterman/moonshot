import React, { Component } from "react";
import Header from "../Header/Header.js";
import "./Post.css";

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <Header />
        <form className="project-proposal" action="javascript:void(0);">
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
              name="descrip"
              id="descrip"
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
