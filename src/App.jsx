import React from 'react'
import Home from './pages/home/Home'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RouteLayout from './routeLayout/RouteLayout';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RouteLayout/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
    )
  );
  
  return (
  <>
      <RouterProvider router={router} />
  </>
  )
}

export default App