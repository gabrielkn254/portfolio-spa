import defaultData from "./defaultData";
const rawData = [...defaultData]

function addIdToData (data){

  // add id key-value to each object item in the array
  const newData = data.map(item => {
    const id = data.indexOf(item) + 1 
    return (
      item = {
        id, ...item
      }
    )}
  )

  // return an array of project objects with ids starting from 1..
  return newData
}


export { rawData, addIdToData};