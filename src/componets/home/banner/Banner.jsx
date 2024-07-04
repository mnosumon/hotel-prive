import React from 'react'
import BannerBG from '../../../assets/bg-image/bannerBG.jpg'
import Navbar from '../../navbar/Navbar'

const Banner = () => {
  return (
    <>
        <div className='font-roboto bg-cover' style={{ backgroundImage: `url(${BannerBG})` }}>
            <Navbar/>
        </div>
    </>
  )
}

export default Banner