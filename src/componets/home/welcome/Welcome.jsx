import React from 'react';
import HotelImage from '../../../assets/image/welcomHotel.jpg';
import SubHeading from '../../utilities/SubHeading';
import Heading from '../../utilities/Heading';
import { BeforeIcon } from '../../utilities/svgImage/Before-icon';
import Heading3 from '../../utilities/Heading3';
import Peragrap2 from '../../utilities/Peragrap2';
import Paeragrap1 from '../../utilities/Paeragrap1';
import Ancor from '../../utilities/Ancor';
import RightArrow from '../../utilities/RightArrow';

const Welcome = () => {
  return (
    <>
        <div className="bg-color-neutral-5">
            <div className="py-28 container">
                <div className="md:relative md:h-[900px] w-full flex flex-col gap-16">
                    <picture className="md:absolute h-full w-full md:w-[70%] bg-slate-500 md:right-0 md:top-0">
                        <img className='h-full w-full object-cover' src={HotelImage} alt="Hotel Image" />
                    </picture>
                    <div className="md:absolute w-full md:w-[60%] bg-color-neutral-5 md:left-0 md:top-1/2 md:-translate-y-1/2 md:p-20">
                        <SubHeading content="FACILITIES AND SERVICES" className="text-color-neutral-60" ><BeforeIcon color="#7A6F68" /></SubHeading>
                        <Heading content="Luxury Hotel" className="!text-color-neutral !text-left mt-8 mb-6"/>
                        <Heading3 content="Near The Montmartre, Paris" />
                        <Peragrap2 content="Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
                        <Paeragrap1 content="Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus." />
                        <div className="flex gap-8 items-center mt-10">
                            <Ancor content="Explore more" />
                            <RightArrow/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Welcome;