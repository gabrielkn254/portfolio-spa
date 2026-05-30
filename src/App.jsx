import { useState } from 'react'
import './App.css'
import ProjectsList from './components/projects-list/ProjectsList'
import {rawData, addIdToData} from './data/updateData'
import AddProject from './components/add-project/AddProject'

function App() {

  // const [newProject, setNewProject] = useState({})

  const handleAddNewProject = (event) => {
    event.preventDefault()

    // get formentries
    const formData = new FormData(event.target)
    const formEntries = Object.fromEntries(formData)

    // create newProject
    const newProject = {
      name: formEntries.name,
      shortDesc: formEntries.shortDesc,
      description: formEntries.description
    }

    // push newProject to rawData
    rawData.push(newProject)

    // add id to data
    const data = addIdToData(rawData)

    console.log(data)
  }
  // add id to projects
  // const data = addIdToData(defaultData)

  return (
    <>
    <div className='hero-title'>
      <h1>PORTFOLIO</h1>
    </div>

    <div className='main-content'>
      <div className='left-content-box'>
        <AddProject onSubmit={handleAddNewProject}/>
      </div>

      <div className='right-content-box'>
        {/*<ProjectsList data={data} />*/}
      </div>
    </div>

    </>
  )
}

export default App
