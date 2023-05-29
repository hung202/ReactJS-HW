// TodoForm.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../action/actions";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim() !== "") {
      addTodo({
        todo: todo.trim(),
      });
      setTodo("");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter a todo"
        style={{}}
      />
      <button type="submit" style={{}}>
        Add Todo
      </button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);
