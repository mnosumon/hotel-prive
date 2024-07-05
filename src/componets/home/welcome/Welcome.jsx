import React from 'react';
import hotelImage from '../../../assets/image/welcomHotel.jpg';
import SubHeading from '../../utilities/SubHeading';
import Heading from '../../utilities/Heading';
import { BeforeIcon } from '../../utilities/svgImage/Before-icon';
import Heading3 from '../../utilities/Heading3';

const Welcome = () => {
  return (
    <div className="container">
        <article className="lg:relative mt-20">
            <div className="w-full max-w-[55rem] lg:absolute left-full lg:-translate-x-full">
                <a href="#">
                    <img src={hotelImage} alt="Luxury Hotel" className="inline-block max-w-full" />
                </a>
            </div>
            <div className="lg:absolute left-0 top-12 mt-8 md:mt-0 p-5 md:p-[7.5rem] max-w-[45.5rem] w-full z-10 bg-color-neutral-0">
                <SubHeading content="welcome" className="text-color-neutral-60" ><BeforeIcon color="#7A6F68" /></SubHeading>
                <Heading content="Luxury Hotel" className="!text-color-neutral !text-left mt-8 mb-6"/>
                <Heading3 content="Near The Montmartre, Paris" />
                <p className="font-bold text-lg leading-[2rem] text-color-neutral-80 font-roboto mt-8 mb-5">
                Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                </p>
                <p className="text-lg leading-[2rem] text-color-neutral-80 font-roboto">
                Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus.
                </p>
                <div className="flex gap-8 items-center mt-10">
                    <a href="#" className="text-lg tracking-[1.5px] text-color-primary font-roboto leading-[26px] font-semibold">Explore more</a>
                    <div className="relative h-[2px] w-12 bg-color-primary after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-[4px] after:border-t-[4px] after:border-l-[12px] after:border-solid after:border-y-transparent after:border-l-color-primary after:top-1/2 after:left-full after:-translate-y-1/2"></div>
                </div>
            </div>
        </article>
    </div>
  );
};

export default Welcome;