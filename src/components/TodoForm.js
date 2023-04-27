import React, { useState, useEffect, useRef, useContext } from 'react'
import { TodoContext } from '../store/TodoContext'

function TodoForm({ edit }) {
  const  [state, dispatch] = useContext(TodoContext)
  const [input, setInput] = useState('')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const addSubmit = e => {
    e.preventDefault()
    dispatch({ type : 'ADD_TODO' , payload : { id: Math.floor(Math.random() * 1000000), text: input, isComplete: false }})
    setInput('')
  }

  const updateSubmit = e => {
    e.preventDefault()
    dispatch({ type : 'UPDATE_TODO' , payload : { prevValue: edit, newValue: input }})
    dispatch({ type : 'UPDATE_EDIT' , payload : { id: null, value: '' }})
    setInput('')
  }

  const handleChange = e => {
    setInput(e.target.value)
  }

  return (
    <form className='todo-form'>
    {edit ? (
      <React.Fragment>
        <input
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          className='todo-input edit'
        />
        <button onClick={updateSubmit} className='todo-button edit'>Update</button>
      </React.Fragment>
    ) : (
      <React.Fragment> 
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleChange}
          name='text'
          className='todo-input'
          ref={inputRef}
        />
        <button onClick={addSubmit} className='todo-button'>Add todo</button>
      </React.Fragment>
    )}
  </form>
  )
}

export default TodoForm
