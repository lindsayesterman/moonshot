import React, { Component } from 'react'
import Header from '../Header/Header.js'

export default class Post extends Component {
    render() {
        return (
            <div className="post">
                <Header />
                <h1>post page</h1>
            </div>
        )
    }
}
