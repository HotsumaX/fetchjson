import axios from "axios"

const url = "http://jsonplaceholder.typicode.com/todos/75"


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
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