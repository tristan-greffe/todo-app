import React, { useReducer } from 'react'
import { TodoContext } from '../store/TodoContext'

export const TodoProvider = ({ children }) => {
  const initialState = { todos : [], edit: { id: null, value: '' } }

  const reducer = (state, action) =>{
    switch(action.type){
      case 'ADD_TODO':
        return {
          ...state,
          todos : state.todos.concat(action.payload)
        }
      case 'REMOVE_TODO':
        return {
          ...state,
          todos : [...state.todos].filter(todo => todo.id !== action.payload)
        }
      case 'UPDATE_TODO':
        return {
          ...state,
          todos : state.todos.map((todo) => (todo.id === action.payload.prevValue.id ? { id: todo.id, text: action.payload.newValue, isComplete: todo.isComplete } : todo))
        }
      case 'COMPLETE_TODO':
        return {
          ...state,
          todos : state.todos.map((todo) => (todo.id === action.payload ? { id: todo.id, text: todo.text, isComplete: !todo.isComplete } : todo))
        }
        case 'UPDATE_EDIT':
          return {
            ...state,
            edit : action.payload
          }
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <TodoContext.Provider value={[state, dispatch]}>
      {children}
    </TodoContext.Provider>
  )
}
