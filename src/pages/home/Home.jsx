import React from 'react'
import Banner from '../../componets/home/banner/Banner'
import Welcome from '../../componets/home/welcome/Welcome'
import Accommodation from '../../componets/home/accommodation/Accommodation'
import Facilities from '../../componets/home/facilities/Facilities'
import Join from '../../componets/home/join/Join'

const Home = () => {
  return (
    <>
        <Banner/>
        <Welcome/>
        <Accommodation/>
        <Facilities/>
        <Join/>
    </>
  )
}

export default Home
