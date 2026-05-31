import React from 'react'
import "./project-card.css"
import MaximizeIcon from '../../assets/MaximizeIcon'

function ProjectCard( {onExpand, id, name, shortDesc}){
  return (
    <div className='project-card'>
      <div className="header">
        <p>{ Number(id) > 9 ? `${id}`: `0${id}` }</p>
        <button onClick={onExpand}>
          <MaximizeIcon className="maximize-icon" />
        </button>
      </div>

      <div className="text">
        <h3>{name}</h3>
        <p>{shortDesc}</p>
      </div>

    </div>
  )
}

export default ProjectCard