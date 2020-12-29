import React, { Component } from "react";
import Header from "../Header/Header.js";
import "./PostPage.css";
import config from "../config.js";
import PostsContext from "../postsContext";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
    this.state = { value: "other" };
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  static contextType = PostsContext;

  handleSortChange(event) {
    this.setState({ value: event.target.value });
  }

  handlePostProject = (e) => {
    e.preventDefault();
    const project = {
      name: e.target["name"].value,
      description: e.target["description"].value,
      features: e.target["features"].value,
      topic: e.target["topic"].value,
      author: e.target["author"].value,
      date_created: new Date(),
    };
    this.setState({ error: null });
    fetch(`${config.API_ENDPOINT}/projects`, {
      method: "POST",
      body: JSON.stringify(project),
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) {
          return res.json().then((error) => {
            throw error;
          });
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.context.addProject(data);
        console.log(this.context.projects);
        console.log(this.props.projects);
        this.props.history.push(`/projects/${data.id}`);
      })
      .catch((error) => {
        this.setState({ error });
      });
  };

  render() {
    return (
      <div className="post">
        <Header />
        <form
          className="project-proposal"
          onSubmit={(e) => this.handlePostProject(e)}
        >
          <h1 className="post-h1">Post a project</h1>
          <div className="form-input-material">
            <input
              type="text"
              name="name"
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
            <input
              type="text"
              name="features"
              id="features"
              placeholder="Make friends, compete for times."
            />
            <select id="topic" value={this.state.value} onChange={this.handleSortChange}>
              <option value="academic">Academic</option>
              <option value="athletics">Athletics</option>
              <option value="art">Art/Music</option>
              <option value="community">Community Service</option>
              <option value="tech">Computer/Technology</option>
              <option value="social">Social</option>
              <option value="work">Work</option>
              <option value="other">Other</option>
            </select>
            <input
              type="text"
              name="author"
              id="author"
              placeholder="Lindsay Esterman"
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
