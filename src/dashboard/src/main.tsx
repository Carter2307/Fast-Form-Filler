import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <App firstConnection={false}></App>
  </React.StrictMode>,
)
