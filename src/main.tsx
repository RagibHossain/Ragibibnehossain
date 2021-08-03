import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { createBrowserHistory } from "history";

// import './../node_modules/react-typist/dist/typist.css'
const history = createBrowserHistory();
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
export default history;