import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import { store } from './components/Reduxconcepts/store.js'
import './index.css'
import { Provider } from 'react-redux'

   {/*<React.StrictMode> causes double invoking in development for certain lifecycle methods and hooks. */}
  //  React Strict Mode is like a development safety net that helps you write more robust, future-proof React code by catching issues early.
// createRoot(document.getElementById('root')).render(
//   <App/>  
// )
  // <StrictMode><App/></StrictMode>


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

