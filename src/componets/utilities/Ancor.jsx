import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Ancor = ({ content, className, href }) => {
  return (
    <motion.a
      href={href}
      className={`text-base text-color-primary font-roboto leading-[26px] font-normal ${className}`}
      whileHover={{ scale: 1, rotate: 360 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      {content}
    </motion.a>
  );
};

Ancor.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  href: PropTypes.string,
};

Ancor.defaultProps = {
  className: '',
  href: '#',
};

export default Ancor;
