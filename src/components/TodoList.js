import React from 'react'
import TodoForm from './TodoForm'
import Todo from './Todo'

function TodoList() {
  return (
    <React.Fragment>
      <h1>What's the plan for today ?</h1>
      <TodoForm />
      <Todo />
    </React.Fragment>
  )
}

export default TodoList
