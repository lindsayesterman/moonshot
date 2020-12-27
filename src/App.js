import React, { Component } from "react";
import earth from "./earth-crop.png";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Discover from "./Discover/Discover";
import Post from "./PostPage/PostPage";
import ProjectPage from './ProjectPage/ProjectPage'

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    }
  }

  addPost = (post) => {
    this.setState ({
      posts: [this.state.posts, post]
    })
    console.log(`post -- ${JSON.stringify(post)}`)
  }

  render() {
    return (
      <div class="app">
        <Route exact path="/">
          <Header />
          <h1 className="front-page-descrip">
            Find projects to help build your portfolio. Sort by topic,
            difficulty level, or likes.
          </h1>
          <div className="button-holder">
            <Link to="/discover" style={{ textDecoration: "none" }}>
              <button className="start-browsing">Find ideas</button>
            </Link>
            <Link to="/post" style={{ textDecoration: "none" }}>
              <button className="start-posting">Post Ideas </button>
            </Link>
          </div>
          <img className="earth" src={earth}></img>
        </Route>
        <Route path="/discover" component={Discover}></Route>
        <Route path="/post" component={Post}></Route>
        <Route path="/project" component={ProjectPage}></Route>
      </div>
    );
  }
}
