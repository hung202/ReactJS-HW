import axios from 'axios';

export const fetchTodos = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/todos')
      .then((response) => {
        console.log(response.data)
        dispatch({
          type: 'FETCH_TODOS',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addTodo = (todo) => {
  return (dispatch) => {
    axios.post('http://localhost:3000/todos', todo)
      .then((response) => {
        dispatch({
          type: 'ADD_TODO',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateTodo = (todo) => {
  return (dispatch) => {
    axios.put(`http://localhost:3000/todos/${todo.id}`, todo)
      .then((response) => {
        dispatch({
          type: 'UPDATE_TODO',
          payload: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deleteTodo = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/todos/${id}`)
      .then(() => {
        dispatch({
          type: 'DELETE_TODO',
          payload: id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
