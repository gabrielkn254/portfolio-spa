import React from 'react'
import "./search-projects.css"

function SearchProject({onSearch}){
  return (
    <div className='search-project'>
      <form >
        <input 
          type="text"
          name="searchTerm"
          placeholder='Search a Project...'
          onChange={(e) => onSearch(e.target.value.trim())}
          />
      </form>
    </div>
  )
}

export default SearchProject
