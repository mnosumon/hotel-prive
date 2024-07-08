import React from 'react';
import SubHeading from '../../utilities/SubHeading';
import { BeforeIcon } from '../../utilities/svgImage/Before-icon';
import JionBgImg from '../../../assets/bg-image/joinImg.svg'
import Heading from '../../utilities/Heading';
import CatchData from '../banner/roomBook/CatchData';

const Join = () => {
  const styles={ 
    header:{ 
    background: '#23160d',
    backgroundImage:`url(${JionBgImg})`,
    backgroundPosition:'center', 
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    opacity: 0.9,
    }
   }
  return (
    <div className="bg-blend-overlay" style={styles.header}>
      <div className="container py-32">
        <div className="flex justify-center">
          <SubHeading content="JOIN OUR MAILING LIST">
            <BeforeIcon color="#E3E1E0" />
          </SubHeading>
        </div>
        <Heading className="py-12" content="Newsletter Sign Up" />
        <div className="md:flex w-full md:w-[80%] lg:w-[60%] gap-8 px-2 mx-auto">
          <div className="mb-4 border-b-2 border-color-neutral-0 w-full md:w-[60%]">
            <label className="block text-color-neutral-20 uppercase tracking-[1.2px] text-sm font-normal mb-5">SIGN UP FOR NEWS AND SPECIAL OFFERS
            </label>
            <input className='bg-transparent outline-none text-color-neutral-0 placeholder:text-color-neutral-0 font-fahkwang text-lg leading-10 capitalize' placeholder='Enter email address' type="text" />
          </div>
          <div className="flex items-center justify-between w-full md:w-[40%]">
            <button className="bg-color-primary hover:bg-color-primary-lighter transition-all duration-500 text-color-neutral-0 py-4 tracking-[1.2px] uppercase text-lg leading-8 w-full">subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Join;