import React from 'react'

const PostsContext = React.createContext ({
    posts: [],
    addPost: () => {}
})

export default PostsContext