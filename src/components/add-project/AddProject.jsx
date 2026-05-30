import React from 'react'

function AddProject({onSubmit}) {
  return (
    <div className='add-project-box'>
      <form className='add-project-form' onSubmit={onSubmit}>
        <div>
          <label htmlFor="name">Project Title</label>
          <input
          type="text"
          name='name' />
        </div>

        <div>
          <label htmlFor="shortDesc">Short Description</label>
          <textarea
          type="text"
          name='shortDesc'
          rows={3} />
        </div>

        <div>
          <label htmlFor="description">Detailed Description</label>
          <textarea
          type="text"
          name='description'
          rows={8}/>
        </div>

        <button type='submit'>Add Project</button>
      </form>
    </div>
  )
}

export default AddProject
