import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "../TodoSlice";

const AddTodo = () => {
  const [todo, setTodo] = useState("");
  const DISPATCH = useDispatch();

  const addNewTodo = () => {
    DISPATCH(
      addTodo({
        id: nanoid(),
        todoName: todo,
        dateTime: new Date().toLocaleString(),
      })
    );
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button onClick={addNewTodo}>Add</button>
      </div>
    </>
  );
};

export default AddTodo;
