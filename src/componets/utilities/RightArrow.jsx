import React from 'react';
import { motion } from 'framer-motion';

const RightArrow = ({ className }) => {
  return (
    <motion.div
      className={`relative h-[2px] w-8 bg-color-primary ${className}`}
      whileHover={{ rotateY: 360 }}
      transition={{ duration: 1 }}
    >
      <div
        className="
          absolute 
          w-0 
          h-0 
          border-b-[4px] 
          border-t-[4px] 
          border-l-[12px] 
          border-solid 
          border-y-transparent 
          border-l-color-primary 
          top-1/2 
          left-full 
          -translate-y-1/2
        "
      />
    </motion.div>
  );
};

export default RightArrow;
