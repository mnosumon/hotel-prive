import React from 'react'
import FacilitiesIMG from '../../../assets/image/facilities.jpg'
import SubHeading from '../../utilities/SubHeading'
import { BeforeIcon } from '../../utilities/svgImage/Before-icon'
import Heading from '../../utilities/Heading'
import Peragrap2 from '../../utilities/Peragrap2'
import Paeragrap1 from '../../utilities/Paeragrap1'
import Ancor from '../../utilities/Ancor'
import RightArrow from '../../utilities/RightArrow'
import Heading3 from '../../utilities/Heading3'

const Facilities = () => {
  return (
    <>  
        <div className="bg-color-secondary">
            <div className="py-28 px-1 container">
                <div className="md:relative md:h-[900px] w-full flex flex-col gap-16">
                    <picture className="md:absolute h-full w-full md:w-[70%] bg-slate-500 md:left-0 md:top-0">
                        <img className='h-full w-full object-cover' src={FacilitiesIMG} alt="Facilities Image" />
                    </picture>
                    <div className="md:absolute w-full md:w-[60%] bg-color-secondary md:right-0 md:top-1/2 md:-translate-y-1/2 md:p-20">
                        <SubHeading content="FACILITIES AND SERVICES" className="text-color-secondary-40" ><BeforeIcon color="#C2B0A3" /></SubHeading>
                        <Heading content="Wellness & Spa" className="!text-color-neutral-0 !text-left mt-8 mb-6"/>
                        <Peragrap2 className="!text-color-neutral-0 font-bold" content="Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
                        <Paeragrap1 className="!text-color-neutral-0" content="Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus." />
                        <div className="flex gap-8 items-center mt-10">
                            <Ancor className="text-color-primary !font-semibold !text-lg !tracking-[1.5px]" href="#" content="Explore more" />
                            <RightArrow className="!w-12" />
                        </div>
                        <Heading3 className="!text-color-neutral-0 mt-6" content="Near The Montmartre, Paris Sed laoreet aliquam le" />
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Facilities