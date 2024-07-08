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
import { motion } from "framer-motion";


const getResponsiveValue = (baseValue, screenSize) => {
    switch (screenSize) {
      case 'small':
        return baseValue * 0.5;
      case 'large':
        return baseValue * 1.5;
      default:
        return baseValue;
    }
  };

  const fadeIn = (direction, delay, screenSize) => {
    const distance = getResponsiveValue(40, screenSize);
    const duration = getResponsiveValue(1.5, screenSize);
  
    return {
      hidden: {
        y: direction === "up" ? distance : direction === "down" ? -distance : 0,
        x: direction === "left" ? distance : direction === "right" ? -distance : 0,
        opacity: 0, 
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: duration,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };

  const useScreenSize = () => {
    const [screenSize, setScreenSize] = React.useState('medium');
  
    React.useEffect(() => {
      const updateSize = () => {
        if (window.innerWidth < 640) {
          setScreenSize('small');
        } else if (window.innerWidth > 1024) {
          setScreenSize('large');
        } else {
          setScreenSize('medium');
        }
      };
  
      window.addEventListener('resize', updateSize);
      updateSize(); 
  
      return () => window.removeEventListener('resize', updateSize);
    }, []);
  
    return screenSize;
  };

const Welcome = () => {
    const screenSize = useScreenSize();
  return (
    <>
        <div className="bg-color-neutral-5">
            <div className="py-28 px-1 container">
                <div className="md:relative md:h-[900px] w-full flex flex-col gap-16">
                    <picture className="md:absolute h-full w-full md:w-[70%] bg-slate-500 md:right-0 md:top-0">
                        <img className='h-full w-full object-cover' src={HotelImage} alt="Hotel Image" />
                    </picture>
                    <div className="md:absolute w-full md:w-[60%] bg-color-neutral-5 md:left-0 md:top-1/2 md:-translate-y-1/2 md:p-20">
                        <SubHeading content="Welcome" className="text-color-neutral-60" ><BeforeIcon color="#7A6F68" /></SubHeading>
                        <motion.div
                        variants={fadeIn("down", 0.5, screenSize)}
                        initial="hidden"
                        animate="show">
                        <Heading content="Luxury Hotel" className="!text-color-neutral !text-left mt-8 mb-6"/>
                        </motion.div>
                        <motion.div
                        variants={fadeIn("left", 0.5, screenSize)}
                        initial="hidden"
                        animate="show">
                            <Heading3 content="Near The Montmartre, Paris" />
                        </motion.div>
                        <motion.div
                        variants={fadeIn("right", 0.5, screenSize)}
                        initial="hidden"
                        animate="show">
                            <Peragrap2 content="Aliquam erat volutpat. Duis ac turpis. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit." />
                        </motion.div>
                        <motion.div
                        variants={fadeIn("up", 0.5, screenSize)}
                        initial="hidden"
                        animate="show">
                            <Paeragrap1 content="Mauris fermentum dictum magna. Sed laoreet aliquam leo. Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit. Aenean auctor wisi et urna. Aliquam erat volutpat. Duis ac turpis. Integer rutrum ante eu lacus." />
                        </motion.div>
                        <div className="flex gap-8 items-center mt-10">
                            <Ancor className="!font-semibold !text-lg !tracking-[1.5px] text" content="Explore more" />
                            <RightArrow className="!w-12" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};

export default Welcome;