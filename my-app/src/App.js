import React, {useState} from "react";
import TodoList from "./TodoList";


function App() {
  const [todos, settodos] = useState(['Todo 1', 'Todo 2'])
  return  (
    <>
  <TodoList todos={todos}/> 
  <input type = "text" /> 
  <button> Add ToDolist</button>
  <button>Clear completed </button>
  <button>0 left ToDo</button>
  </>
  )
}

export default App;
