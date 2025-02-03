import React from 'react'
import Home from './Components/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Edit from './Components/Edit'
import Create from './Components/Create'
import Read from './Components/Read'
import PageNotFound from './Components/PageNotFound'
let routes=createBrowserRouter([
    {
        path:'/',
        element:<Home/>
    },
    {
        path:'/create',
        element:<Create/>
    },
    {
        path:`/edit/:id`,
        element:<Edit/>
    },
    {
        path:`/read/:id`,
        element:<Read/>
    },
    {
        path:'*',
        element:<PageNotFound/>
    }
])
const App = () => {
    
  return <>
    <RouterProvider router={routes}></RouterProvider>
  </>
}

export default App