import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { FaChevronDown } from "react-icons/fa";
import Image from '../utilities/Image';
import HeaderMiddle from '../../assets/image/headerMiddle.png'
import { IoMdCall } from "react-icons/io";

const Navbar = () => {
  return (
    <>
        <header className="flex flex-wrap md:flex-nowrap items-center justify-between md:px-16 py-[22px] px-2 md:py-11 gap-y-4 md:gap-y-0">
            <div className="flex gap-8 items-center w-1/2 md:w-auto">
                <FaBarsStaggered className='text-color-neutral-0' />
                <div className="flex items-center gap-3 cursor-pointer text-color-neutral-0 text-sm">
                    <span className='uppercase'>en</span>
                    <FaChevronDown className='' />
                </div>
            </div>
            <div className="flex justify-end w-1/2 md:w-auto">
                <Image className="max-w-full bg-transparent" sourc={HeaderMiddle} alt="HeaderMiddle Image" />
            </div>
            <div className="w-full md:w-auto flex md:gap-3 justify-between">
                <div className="text-sm text-color-neutral-0 leading-4 flex items-center gap-3">
                    <IoMdCall />
                    <span>+1 800 603 6035</span>
                </div>
                <a className='uppercase bg-color-primary text-color-neutral-0 inline-block text-sm py-4 px-6' href="#">book now</a>
            </div>
        </header>
    </>
  )
}

export default Navbar