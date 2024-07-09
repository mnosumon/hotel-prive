import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Ancor = ({ content, className, href }) => {
  const variants = {
    hover: {
      scale: 1.1,
      rotateY: 15,
      transition: {
        duration: 0.3,
      },
    },
    tap: {
      scale: 0.9,
      rotateY: -15,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.a
      href={href}
      className={`text-base text-color-primary font-roboto leading-[26px] font-normal ${className}`}
      variants={variants}
      whileHover="hover"
      whileTap="tap"
    >
      {content}
    </motion.a>
  );
};
Ancor.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
};

export default Ancor;
