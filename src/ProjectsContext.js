import React from 'react'

const ProjectsContext = React.createContext ({
    projects: [],
    addProject: () => {}
})

export default ProjectsContext