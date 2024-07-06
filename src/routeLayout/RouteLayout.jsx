import React from 'react'
import Navbar from '../componets/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../componets/footer/Footer'

const RouteLayout = () => {
  return (
    <>
        <Navbar/>
            <Outlet/>
        <Footer/>
    </>
  )
}

export default RouteLayout