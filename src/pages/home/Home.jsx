import React from 'react'
import Banner from '../../componets/home/banner/Banner'
import Welcome from '../../componets/home/welcome/Welcome'
import Accommodation from '../../componets/home/accommodation/Accommodation'
import Facilities from '../../componets/home/facilities/Facilities'
import Join from '../../componets/home/join/Join'
import HotelPrive from '../../componets/home/hpotelPrive/HotelPrive'
import SuperiorSlider from '../../componets/home/superiorSlider/SuperiorSlider'
import SpecialOffer from '../../componets/home/specialOffer/SpecialOffer'

const Home = () => {
  return (
    <>
        <Banner/>
        <Welcome/>
        <SpecialOffer/>
        <Accommodation/>
        <SuperiorSlider/>
        <Facilities/>
        <Join/>
        <HotelPrive/>
    </>
  )
}

export default Home
