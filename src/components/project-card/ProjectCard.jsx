import React from 'react'

function ProjectCard( {onExpand, id, name, shortDesc}){
  return (
    <div>
      <div className="header">
        <p>{ Number(id) > 9 ? `${id}`: `0${id}` }</p>
        <button onClick={onExpand}>Expand</button>
      </div>

      <div className="text">
        <h3>{name}</h3>
        <p>{shortDesc}</p>
      </div>

    </div>
  )
}

export default ProjectCard