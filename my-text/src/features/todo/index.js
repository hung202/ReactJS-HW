import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoItem } from './actions';
import { TodoList } from './TodoList';
const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const handleOnchange = (e) => {
    const { value } = e.target;
    if (value) {
      setInputValue(value)
    }
  }
  const handleSubmit = () => {
    if (inputValue) {
      dispatch(addTodoItem(inputValue))
      setInputValue('')
    }
  }
  return (
    <div style={{ padding: 20 }}>
      <h1>Todo App</h1>
      <div>
        <input placeholder="Add new todo" value={inputValue} onChange={handleOnchange} />
        <button onClick={handleSubmit}>Add</button>
      </div>
      <div>
        Todo List:
        <TodoList />
      </div>
    </div>
  )
}
export default TodoApp;