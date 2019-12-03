import axios from "axios"

const url = "http://jsonplaceholder.typicode.com/todos/75"

axios.get(url).then(response=>{
  const todo = response.data
  const ID = todo.ID
  const title = todo.Title
  const finished = todo.finished

  console.log(`
    The Todo with ID: ${ID}
    has a title of: ${title}
    is it finished? ${finished}
  `)
})