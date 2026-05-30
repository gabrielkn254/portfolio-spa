import React, { useState } from 'react'
import ProjectCard from '../project-card/ProjectCard'
import ProjectDetails from '../project-details/ProjectDetails'

const ProjectsList = ({ data }) => {

  const [expandedProject, setExpandedProject] = useState(null)

  const expandModal = (projectId) => {
    setExpandedProject(projectId)
  }

  const closeModal = () => {
    setExpandedProject(null)
  }

  

  return (
    <div className='projects-list'>
      {
        data.map(item => {
          return (
          <ProjectCard
            key={ item.id }
            id = {item.id}
            name = {item.name}
            shortDesc={item.shortDesc}
            onExpand={() => expandModal(item.id)}

          />
        )})
      }
      
      <ProjectDetails 
        onClose={closeModal}
        projectOnExpand={expandedProject}
        projectsData={data}
      />
    </div>
  )
}

export default ProjectsList
