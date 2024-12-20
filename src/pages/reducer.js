import { configureStore, createSlice } from '@reduxjs/toolkit'

// Counter Slice
export const counterSlice = createSlice({
  name: 'counter', // This name will be used in action types and store structure
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

// Todo Slice
export const todoSlice = createSlice({
  name: 'todos', // Another unique name
  initialState: {
    items: []
  },
  reducers: {
    addTodo: (state, action) => {
      state.items.push(action.payload)
    }
  }
})
export const {increment , decrement } = counterSlice.actions ; 
export const {addTodo } = todoSlice.actions ; 
// Configure Store
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer, // The slice name determines this key
    todos: todoSlice.reducer
  }
})