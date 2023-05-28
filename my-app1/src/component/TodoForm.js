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
        style={{
          padding: "0.5rem",
          marginRight: "0.5rem",
          borderRadius: "4px",
          border: "1px solid #ccc",
          outline: "none",
        }}
      />
      <button
        type="submit"
        style={{
          padding: "0.5rem 1rem",
          borderRadius: "4px",
          border: "none",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add Todo
      </button>
    </form>
  );
};

export default connect(null, { addTodo })(TodoForm);
