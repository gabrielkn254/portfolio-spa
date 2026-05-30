import { useState } from 'react'
import './App.css'
import ProjectsList from './components/projects-list/ProjectsList'
import {data} from './data/updateData'

function App() {

  return (
    <>
    <div className='hero-title'>
      <h1>PORTFOLIO</h1>
    </div>

    <div className='main-content'>
      <div className='left-content-box'>
        {/* form */}
      </div>

      <div className='right-content-box'>
        <ProjectsList data={data} />
      </div>
    </div>

    </>
  )
}

export default App
