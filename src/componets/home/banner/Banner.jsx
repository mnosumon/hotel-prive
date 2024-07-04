import React from 'react'
import BannerBG from '../../../assets/bg-image/bannerBG.jpg'
import Navbar from '../../navbar/Navbar'
import SubHeading from '../../utilities/SubHeading'
import Heading from '../../utilities/Heading'
import Button from '../../utilities/Button'
import RoomBook from './roomBook/RoomBook'
import Calendar from './roomBook/Calendar'

const Banner = () => {
  const styles={ 
    header:{ 
    background: 'rgba(71, 61, 53, 1)',
    backgroundImage:`url(${BannerBG})`,
    height: '105vh', 
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
            <Button className="mt-3 w-[88px] h-[88px] border-2 rounded-full border-color-neutral-20 border-solid relative after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-[12px] after:border-t-[12px] after:border-l-[12px] after:border-solid after:border-y-transparent after:border-l-color-neutral-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2" content=" " />
          </div>
          <RoomBook/>
          <Calendar/>
      </div>
    </>
  )
}

export default Banner