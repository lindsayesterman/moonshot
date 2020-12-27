import React, { Component } from 'react'
import './ProjectPage.css'

export default class ProjectPage extends Component {
    render() {
        return (
            <div className="project-page">
                <h1>Name</h1>
                <h3>Description of project</h3>
                <h3>Features:</h3>
                <h3>Users:</h3>
                <h4>Author:</h4>
                <p>Likes:</p>
            </div>
        )
    }
}
