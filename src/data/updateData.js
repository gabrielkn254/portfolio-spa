import defaultData from "./defaultData";

// function updateData (){

//   // id data
//   const data = defaultData.map(item => ( item.id = defaultData.indexOf(item) + 1 ))

//   // return updated data
//   return data
// }

const data = defaultData.map(item => {
  const id = defaultData.indexOf(item) + 1 
  return (
    item = {
      id, ...item
    }
  )}
)

export { data };