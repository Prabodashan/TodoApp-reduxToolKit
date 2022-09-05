import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    todoName: "Todo 1",
    dateTime: "30/06/2022, 16:45:40",
  },
  {
    id: 2,
    todoName: "Todo 2",
    dateTime: "10/07/2022, 20:10:40",
  },
  {
    id: 3,
    todoName: "Todo 3",
    dateTime: "20/08/2022, 12:50:40",
  },
];

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state = state.filter((todo) => todo.id !== action.payload);
      return state;
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
