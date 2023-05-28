import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos, updateTodo, deleteTodo } from "../action/actions";

const TodoList = ({ todos, fetchTodos, updateTodo, deleteTodo }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  const handleUpdate = (todo) => {
    updateTodo({
      ...todo,
      completed: !todo.completed,
    });
  };

  const handleDelete = (id) => {
    deleteTodo(id);
  };

  return (
    <div style={{ padding: "10px" }}>
      <h2>Todo List</h2>
      {todos.map((todo) => (
        <div key={todo.id} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleUpdate(todo)}
          />
          <span style={{ marginLeft: "10px", padding: "10px" }}>{todo.todo}</span>
          <button onClick={() => handleDelete(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { fetchTodos, updateTodo, deleteTodo })(
  TodoList
);
