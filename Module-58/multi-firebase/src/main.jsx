import React from 'react'
import ReactDOM from 'react-dom/client'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './cpmponents/Main/Main';
import Home from './cpmponents/Home/Home';
import Login from './cpmponents/Login/Login';
import Register from './cpmponents/Register/Register';
import RegisterRBS from './cpmponents/RegisterRBS/RegisterRBS';
import RegisterBs from './cpmponents/RegisteBS/RegisterBs';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path:'/register',
        element: <Register></Register>
      },
      {
        path:'/register-rbs',
        element: <RegisterRBS></RegisterRBS>
      },
      {
        path:'/Register-bs',
        element: <RegisterBs></RegisterBs>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
