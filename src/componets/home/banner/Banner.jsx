import React from 'react'
import BannerBG from '../../../assets/bg-image/bannerBG.jpg'
import Navbar from '../../navbar/Navbar'
import SubHeading from '../../utilities/SubHeading'
import Heading from '../../utilities/Heading'

const Banner = () => {
  const styles={ 
    header:{ 
    background: 'rgba(71, 61, 53, 1)',
    backgroundImage:`url(${BannerBG})`,
    height: '100vh', 
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' 
    }
   }
  return (
    <>
      <div className='font-roboto bg-blend-overlay' style={styles.header}>
          <Navbar/>
          <div className="container flex flex-col md:gap-6 sm:gap-3 gap-1 items-center">
            <SubHeading content="time to reconnect" />
            <Heading content="A New Vision of Comfort" />
          </div>
      </div>
    </>
  )
}

export default Banner