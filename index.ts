import axios from "axios"

const url = "http://jsonplaceholder.typicode.com/todos/75"


interface Todo {
  id: number;
  title: string;
  completed: boolean;
}
axios.get(url).then(response=>{
  const todo = response.data as Todo
  const ID = todo.id
  const title = todo.title
  const finished = todo.completed

  console.log(`
    The Todo with ID: ${ID}
    has a title of: ${title}
    is it finished? ${finished}
  `)
})