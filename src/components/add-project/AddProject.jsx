import React from 'react'
import "./add-project.css"

function AddProject({onAddProject}) {
  return (
    
    <form className='add-project-form' onSubmit={onAddProject}>
      <div className='name'>
        <label htmlFor="name">Project Title</label>
        <input
        type="text"
        name='name'
        id='name'
        autoComplete='off' />
      </div>

      <div className='shortDesc'>
        <label htmlFor="shortDesc">Short Description</label>
        <textarea
        type="text"
        name='shortDesc'
        id='shortDesc'
        rows={2}
        autoComplete='off' />
      </div>

      <div className='description'>
        <label htmlFor="description">Detailed Description</label>
        <textarea
        type="text"
        name='description'
        id='description'
        rows={8}
        autoComplete='off' />
      </div>

      <button type='submit'>Add Project</button>
    </form>
  )
}

export default AddProject
