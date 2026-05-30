import React from 'react'
import "./project-details.css"

function ProjectDetails ({ onClose, projectsData, projectOnExpand }){
if (projectOnExpand === null)
  { return(null) } else {
    const project = projectsData[projectOnExpand - 1]

    return (
    <div className='overlay'>
      <div className='modal-box'>
        <h2>{ project.name }</h2>
        <p>{ project.description }</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  )

}

}

export default ProjectDetails
