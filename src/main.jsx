import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
   {/*<React.StrictMode> causes double invoking in development for certain lifecycle methods and hooks. */}
  //  React Strict Mode is like a development safety net that helps you write more robust, future-proof React code by catching issues early.
createRoot(document.getElementById('root')).render(
  <App/>  
  // <StrictMode><App/></StrictMode>
)
