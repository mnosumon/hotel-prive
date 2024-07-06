import React from 'react';
import hotelImage from '../../../assets/image/welcomHotel.jpg';
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
    <div className="bg-color-neutral-5 py-28">
        <div className="container">
            <div className="lg:relative">
                <div className="w-full max-w-[55rem] lg:absolute left-full lg:-translate-x-full">
                    <a href="#">
                        <img src={hotelImage} alt="Luxury Hotel" className="inline-block max-w-full" />
                    </a>
                </div>
                <div className="lg:absolute left-0 top-12 mt-8 md:mt-0 p-5 md:p-[7.5rem] max-w-[45.5rem] w-full z-10 bg-color-neutral-0">
                    <SubHeading content="welcome" className="text-color-neutral-60" ><BeforeIcon color="#7A6F68" /></SubHeading>
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
  );
};

export default Welcome;