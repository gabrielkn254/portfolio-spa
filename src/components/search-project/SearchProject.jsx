import React from 'react'

function SearchProject({onSearch}){
  return (
    <div className='search-project'>
      <form >
        <input 
          type="text"
          placeholder='Search a Project...'
          onChange={(e) => onSearch(e.target.value.trim())}
          />
      </form>
    </div>
  )
}

export default SearchProject
