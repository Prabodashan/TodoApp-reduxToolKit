import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo } from "../TodoSlice";

const TodoList = () => {
  const TODOS = useSelector((state) => state.todos);
  const DISPATCH = useDispatch();

  return (
    <>
      {TODOS?.map((todo) => (
        <div key={todo.id}>
          <h3>{todo.todoName}</h3>
          <p>{todo.dateTime}</p>
          <button onClick={() => DISPATCH(deleteTodo(todo.id))}>Delete</button>
        </div>
      ))}
    </>
  );
};

export default TodoList;
