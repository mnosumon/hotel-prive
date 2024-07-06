import React from 'react'
import FacilitiesIMG from '../../../assets/image/facilities.jpg'
import SubHeading from '../../utilities/SubHeading'
import { BeforeIcon } from '../../utilities/svgImage/Before-icon'
import Heading from '../../utilities/Heading'
import Heading3 from '../../utilities/Heading3'
import Peragrap2 from '../../utilities/Peragrap2'
import Paeragrap1 from '../../utilities/Paeragrap1'
import Ancor from '../../utilities/Ancor'
import RightArrow from '../../utilities/RightArrow'

const Facilities = () => {
  return (
    <>  
        <div className="bg-color-secondary">
            <div className="py-28 container">
                <div className="md:relative h-[900px] w-full">
                    <picture className="md:absolute h-full w-[70%] bg-slate-500 left-0 top-0">
                        <img className='h-full w-full object-cover' src={FacilitiesIMG} alt="Facilities Image" />
                    </picture>
                    <div className="md:absolute w-[60%] bg-color-secondary right-0 top-1/2 -translate-y-1/2 p-20">
                        <SubHeading content="FACILITIES AND SERVICES" className="text-color-secondary-40" ><BeforeIcon color="#C2B0A3" /></SubHeading>
                        <Heading content="Luxury Hotel" className="!text-color-neutral-0 !text-left mt-8 mb-6"/>
                        <Peragrap2 className="!text-color-neutral-0 font-bold" content="Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
                        <Paeragrap1 className="!text-color-neutral-0" content="Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus." />
                        <div className="flex gap-8 items-center mt-10">
                            <Ancor className="text-color-primary" href="#" content="Explore more" />
                            <RightArrow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Facilities