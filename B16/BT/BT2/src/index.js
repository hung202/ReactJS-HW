import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './reducers/studentSlice';
import App from './App';
import "./App.css"
const store = configureStore({
  reducer: {
    students: studentReducer,
  },
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
