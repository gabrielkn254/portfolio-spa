import { useEffect, useState } from 'react'
import './App.css'
import ProjectsList from './components/projects-list/ProjectsList'
import {addIdToProjects} from './data/dataFunctions'
import AddProject from './components/add-project/AddProject'
import defaultProjects from './data/defaultData'
import SearchProject from './components/search-project/SearchProject'

function App() {

  // create projects & searchValue states for dynamically updating & searching
  const [projects, setProjects] = useState(defaultProjects)
  const [searchTerm, setSearchTerm] = useState("")
  
  // connect with localStorage for seamless sync
  useEffect(() => {
    const storedProjects = localStorage.getItem("projects")

    if(storedProjects){
      setProjects(JSON.parse(storedProjects))
    } else {
      localStorage.setItem("projects", JSON.stringify(defaultProjects))
      setProjects(defaultProjects)
    }
  }, [])

  // update localStorage dynamically
  useEffect(() => {
    if(projects.length > 0 ){
      localStorage.setItem("projects", JSON.stringify(projects))
    }
  }, [])

  // add a new Project
  const handleAddNewProject = (event) => {
    event.preventDefault()

    // get form entries
    const formData = new FormData(event.target)
    const formEntries = Object.fromEntries(formData)

    // create newProject
    const newProject = {
      name: formEntries.name,
      shortDesc: formEntries.shortDesc,
      description: formEntries.description
    }

    // set newProject to state
    setProjects((prevProjects) => [...prevProjects, newProject])

    console.log(projects)
  
  }

  // create a filtered project list
  const filteredProjects = projects.filter((project) => ( project.name.toLowerCase().includes( searchTerm.toLowerCase() ) ))

  return (
    <>
    <div className='hero-title'>
      <h1>PORTFOLIO</h1>
    </div>

    <div className='main-content'>
      <div className='left-content-box'>
        <h2>Add a Project</h2>
        <AddProject onAddProject={handleAddNewProject}/>
      </div>

      <div className='right-content-box'>
        <SearchProject onSearch={setSearchTerm} />
        { searchTerm != "" && filteredProjects <= 0
          ? (<p>No Projects found for {searchTerm}</p>)
          : (<ProjectsList data={addIdToProjects(filteredProjects ? filteredProjects : projects)} />)
        }
      </div>
    </div>

    </>
  )
}

export default App
