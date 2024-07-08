import React from 'react';
import SubHeading from '../../utilities/SubHeading';
import { BeforeIcon } from '../../utilities/svgImage/Before-icon';
import Heading from '../../utilities/Heading';
import { motion } from "framer-motion";
import Paeragrap1 from '../../utilities/Paeragrap1';

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

const Accommodation = () => {
  const screenSize = useScreenSize();
  return (
    <div className="my-28 container">
      <div className="flex justify-center">
        <SubHeading content="ACCOMMODATION" className="text-color-neutral-60">
          <BeforeIcon color="#7A6F68" />
        </SubHeading>
      </div>
      <motion.div
        variants={fadeIn("right", 0.5, screenSize)}
        initial="hidden"
        animate="show">
        <Heading content="Rooms & Suits" className="!text-color-neutral my-12" />
      </motion.div>
      <motion.div
        variants={fadeIn("right", 0.5, screenSize)}
        initial="hidden"
        animate="show">
        <Paeragrap1 className="max-w-[600px] text-center mx-auto" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
      </motion.div>
    </div>
  );
}

export default Accommodation;
