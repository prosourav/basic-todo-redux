import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../../redux/Action";

const Todo = (props) => {
  const dispatch = useDispatch();
  const { todo, id } = props.todo;
  console.log("remaining todo:", todo);
  return (
    <div
      style={{
        background: "black",
        color: "#fff",
        margin: "10px 10px",
        padding: "20px 20px",
      }}
    >
      <h2>{todo}</h2>
      <button onClick={() => dispatch(removeTodo(id))}>delete</button>
    </div>
  );
};

export default Todo;
