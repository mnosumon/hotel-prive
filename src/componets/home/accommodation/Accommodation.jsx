import React from 'react';
import SubHeading from '../../utilities/SubHeading';
import { BeforeIcon } from '../../utilities/svgImage/Before-icon';
import Heading from '../../utilities/Heading';
import { motion } from "framer-motion";
import { fadeIn } from '../../../varients/variantsForAccom';
import Paeragrap1 from '../../utilities/Paeragrap1';

const Accommodation = () => {
  return (
    <div className="my-28 container">
      <div className="flex justify-center">
        <SubHeading content="ACCOMMODATION" className="text-color-neutral-60">
          <BeforeIcon color="#7A6F68" />
        </SubHeading>
      </div>
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <Heading content="Rooms & Suits" className="!text-color-neutral my-12" />
      </motion.div>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}>
        <Paeragrap1 className="max-w-[600px] text-center mx-auto" content="Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Suspendisse sollicitudin velit sed leo. Ut pharetra augue nec augue. Nam elit agna, endrerit sit amet." />
      </motion.div>
    </div>
  );
}

export default Accommodation;
