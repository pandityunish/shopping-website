import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Provider } from 'react-redux'
import { store } from './store';
import { ToastContainer } from 'react-toastify';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer/>
    <Provider store={store}>
    
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
