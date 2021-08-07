import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../../redux/Action";
import Todo from "../Todo/Todo";
const Home = () => {
  const [myTodo, setMyTodo] = useState("");
  const todo = useSelector((state) => state.todoReducer.todo);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setMyTodo(e.target.value);
  };

  console.log("My todo: ", todo);

  return (
    <div>
      <h1>
        Basic Todo using <span style={{ color: "red" }}>Redux</span>
      </h1>
      <input
        type="text"
        onChange={handleChange}
        placeholder="write your todo"
        value={myTodo}
      />
      <button onClick={() => dispatch(addTodo(myTodo), setMyTodo(""))}>
        Add
      </button>
      <div style={{ border: "2px solid red", margin: "50px 600px" }}>
        {todo.map((todo) => {
          return <Todo todo={todo} key={todo.id}></Todo>;
        })}
      </div>
    </div>
  );
};

export default Home;
