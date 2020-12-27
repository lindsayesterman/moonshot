import React, { Component } from "react";
import earth from "./earth-crop.png";
import "./App.css";
import { Route, Link } from "react-router-dom";
import Header from "./Header/Header.js";
import Discover from "./Discover/Discover";
import Post from './Post/Post'

export default class App extends Component {
  render() {
    return (
      <div class="app">
        <Route exact path="/">
          <Header />
          <h1 className="front-page-descrip">
            Find projects to help build your portfolio. Sort by topic, difficulty level, or
            likes.
          </h1>
          <Link to="/discover" style={{textDecoration: 'none'}} >
            <button class="start">Get Started</button>
          </Link>
          <img className="earth" src={earth}></img>
        </Route>
        <Route path="/discover" component={Discover}></Route>
        <Route path="/post" component={Post}></Route>
      </div>
    );
  }
}
