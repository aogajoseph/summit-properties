import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HashScroll from './components/HashScroll'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashScroll />
    <App />
  </React.StrictMode>,
)