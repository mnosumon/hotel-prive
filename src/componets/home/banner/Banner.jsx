import React from 'react'
import BannerBG from '../../../assets/bg-image/bannerBG.jpg'
import SubHeading from '../../utilities/SubHeading'
import Heading from '../../utilities/Heading'
import RoomBook from './roomBook/RoomBook'
import { BeforeIcon } from '../../utilities/svgImage/Before-icon'
import { motion } from "framer-motion"


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

   const screenSize = useScreenSize();
  return (
    <>
      <div className='font-roboto bg-blend-overlay' style={styles.header}>
          <div className="container flex flex-col md:gap-6 sm:gap-3 gap-1 items-center pt-72">
            <SubHeading content="time to reconnect" className="text-color-neutral-15" ><BeforeIcon color="#E3E1E0" /></SubHeading>
            <motion.div
              variants={fadeIn("right", 0.5, screenSize)}
              initial="hidden"
              animate="show">
              <Heading content="A New Vision of Comfort" />
            </motion.div>
            <button className="mt-10 w-[88px] h-[88px] border-2 rounded-full border-color-neutral-20 border-solid relative after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-[12px] after:border-t-[12px] after:border-l-[12px] after:border-solid after:border-y-transparent after:border-l-color-neutral-0 after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2"/>
            <button/>
          </div>
          <RoomBook/>
      </div>
    </>
  )
}

export default Banner