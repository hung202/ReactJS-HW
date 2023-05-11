import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import configureStore from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={configureStore}>
    <App />
  </Provider>,
  document.getElementById('root')
)