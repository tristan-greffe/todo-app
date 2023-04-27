import React, { useContext } from 'react'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import TodoForm from './TodoForm'
import { TodoContext } from '../store/TodoContext'

function Todo() {
  const  [state, dispatch] = useContext(TodoContext)

  if (state.edit.id) {
    return <TodoForm edit={state.edit} />
  }

  return state.todos.map((todo, index) => (
    <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
      <div key={todo.id} onClick={() => dispatch({ type : 'COMPLETE_TODO', payload: todo.id })}>
        {todo.text}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => dispatch({ type : 'REMOVE_TODO', payload: todo.id })}
          className='delete-icon'
        />
        <TiEdit
          onClick={() => dispatch({ type : 'UPDATE_EDIT', payload: { id: todo.id, value: todo.text } })}
          className='edit-icon'
        />
      </div>

    </div>
  ))
}

export default Todo
