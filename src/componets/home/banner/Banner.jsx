import React from 'react'
import BannerBG from '../../../assets/bg-image/bannerBG.jpg'
import SubHeading from '../../utilities/SubHeading'
import Heading from '../../utilities/Heading'
import RoomBook from './roomBook/RoomBook'
import { BeforeIcon } from '../../utilities/svgImage/Before-icon'
const Banner = () => {
  const styles={ 
    header:{ 
    background: 'rgba(71, 61, 53, 1)',
    backgroundImage:`url(${BannerBG})`,
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover' 
    }
   }
  return (
    <>
      <div className='font-roboto bg-blend-overlay' style={styles.header}>
          <div className="container flex flex-col md:gap-6 sm:gap-3 gap-1 items-center pt-72">
            <SubHeading content="time to reconnect" className="text-color-neutral-15" ><BeforeIcon color="#E3E1E0" /></SubHeading>
            <Heading content="A New Vision of Comfort" />
            <button className="mt-10 w-[88px] h-[88px] border-2 rounded-full border-color-neutral-20 border-solid relative after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-[12px] after:border-t-[12px] after:border-l-[12px] after:border-solid after:border-y-transparent after:border-l-color-neutral-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"/>
            <button/>
          </div>
          <RoomBook/>
      </div>
    </>
  )
}

export default Banner