
function addIdToProjects (projects){

  // add id key-value to each object item in the array
  const idedProjects = projects.map(project => {
    const id = projects.indexOf(project) + 1 
    return (
      project = {
        id, ...project
      }
    )}
  )

  // return an array of project objects with ids starting from 1..
  return idedProjects
}


export {addIdToProjects};