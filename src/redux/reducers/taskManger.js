import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
        if (!action.payload.text.trim()) {
            throw new Error('Todo text cannot be empty');
          }
          state.push(action.payload);
            },
    removeTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index] = action.payload;
      }
    },
    toggleTodo: (state, action) => {
      const index = state.findIndex(todo => todo.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = !state[index].completed;
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
