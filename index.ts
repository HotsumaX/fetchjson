import axios from "axios"

const url = "http://jsonplaceholder.typicode.com/todos/75"

axios.get(url).then(response=>{
  console.log(response.data)
})