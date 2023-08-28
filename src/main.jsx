import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter ([{
  path:"/", 
  element: <Login /> },
  {
    path:"register",
    element: <Register/>,
  }])


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
  <RouterProvider router ={router}/>  
    
   </React.StrictMode>,
);
