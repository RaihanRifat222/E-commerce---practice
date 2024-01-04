import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Shop from './component/Shop/Shop';

import Home from './component/Layout/Home';
import Order from './component/Order/Order';


const router= createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "/order",
        element: <Order />,
        loader: () => fetch('products.json')
      },
      {
        path: "/inventory",
        element: <div className='mt-20'>Inventory</div>,
      },
      {
        path: "/login",
        element: <div className='mt-20'>Login</div>,
      },
      
    ],
  },

])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
