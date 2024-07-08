import React from 'react'
import SubHeading from '../../utilities/SubHeading'
import { BeforeIcon } from '../../utilities/svgImage/Before-icon'
import Heading from '../../utilities/Heading'
import ImgForHotelPriv from '../../utilities/ImgForHotelPriv'
import HotelPriveIMG1 from '../../../assets/hotelPriveImg/hotelPrivIMG1.jpg'
import HotelPriveIMG2 from '../../../assets/hotelPriveImg/hotelPrivIMG2.jpg'
import HotelPriveIMG3 from '../../../assets/hotelPriveImg/hotelPrivIMG3.jpg'
import HotelPriveIMG4 from '../../../assets/hotelPriveImg/hotelPrivIMG4.jpg'
import HotelPriveIMG5 from '../../../assets/hotelPriveImg/hotelPrivIMG5.jpg'

const HotelPrive = () => {
  return (
    <>
        <div className="py-32 px-2 container">
            <div className="flex justify-center">
                <SubHeading className="text-color-neutral-80" content="#hotelprive">
                    <BeforeIcon color="#7A6F68" />
                </SubHeading>
            </div>
            <Heading className="!text-color-neutral my-12" content="Follow Us on Instagram"/>
            <div className="w-full flex flex-wrap">
                <ImgForHotelPriv source={HotelPriveIMG1} />
                <ImgForHotelPriv source={HotelPriveIMG2} />
                <ImgForHotelPriv source={HotelPriveIMG3} />
                <ImgForHotelPriv source={HotelPriveIMG4} />
                <ImgForHotelPriv source={HotelPriveIMG5} />
            </div>
        </div>
    </>
  )
}

export default HotelPrive