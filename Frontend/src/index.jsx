import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'//Import App.jsx

ReactDOM.createRoot(document.getElementById('root')).render(//render the HTML programmed inside the 'root' div
  <React.StrictMode>
    <App /> 
  </React.StrictMode>
)