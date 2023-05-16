import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishTodoItem, removeTodoItem } from './actions';
const style = {
  input: {
    border: '1px solid black',
    borderRadius: 5,
    padding: 5,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    marginBottom: 10
  },
  button: {
    border: '1px solid black',
    borderRadius: 5,
    padding: '5px 10px',
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
    cursor: 'pointer',
    marginLeft: 5
  },
  itemContainer: {
    display: 'flex',
    width: 200,
    justifyContent: 'space-between',
    borderBottom: '1px solid black'
  },
  filterContainer: {
    display: 'flex'
  },
  ulContainer : {
    listStyleType: 'none',
    margin: 0,
    padding: 0,
  },
  finish: {
    textDecoration: 'line-through'
  }
}
export const TodoList = () => {
  const [filter, setFilter] = useState('');
  const todoList = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  const parseTodo = useMemo(() => {
    return todoList.filter((item) => {
      if (!filter) {
        return true
      }
      return item.status === filter;
    })
  }, [todoList, filter])
  const filterList = (type) => {
    setFilter(type)
  }
  const handleFinish = (id) => {
    dispatch(finishTodoItem(id))
  }
  const handleRemove = (id) => {
    dispatch(removeTodoItem(id))
  }
  return (
    <div>
      <div>
        <button onClick={() => { filterList('')}}>All</button>
        <button onClick={() => { filterList('todo')}}>Todo</button>
        <button onClick={() => { filterList('finish')}}>Done</button>
      </div>
      <ul style={style.ulContainer}>
        {
          parseTodo && parseTodo.map((todoItem) => {
            return (
              <li key={todoItem.id}>
                <div style={style.itemContainer}>
                  <div style={todoItem.status === 'finish' ? style.finish : {}}>{todoItem.content}</div>
                  <div>
                    {
                      todoItem.status === 'todo' ? (
                        <button onClick={() => { handleFinish(todoItem.id) }}>Finish</button>
                      ) : (
                        <button onClick={() => { handleRemove(todoItem.id) }}>Remove</button>
                      )
                    }
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}