import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../Features/Todos/TodoSlice";

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
