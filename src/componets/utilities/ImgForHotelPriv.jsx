import React from 'react'
import { FaInstagram } from "react-icons/fa6";

const ImgForHotelPriv = ({className, source, alt}) => {
  return (
    // <div className="relative cursor-pointer group">
    //   <img className={`w-full h-auto object-cover block ${className}`} src={source} alt={alt} />
    //   <div className="liveDemo opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute inset-0 flex items-center justify-center">
    //     <div className="links">
    //       <FaInstagram className="text-color-neutral-0 text-5xl" />
    //     </div>
    //   </div>
    // </div>

    <picture className='sm:w-[20%] w-1/2 h-auto overflow-hidden p-2 relative hello cursor-pointer'>
        <img className={`w-full h-full object-cover block ${className}`} src={source} alt={alt} />
        <div className="liveDemo">
            <div className="links">
                <FaInstagram className='text-color-neutral-0 text-5xl' />
            </div>
        </div>
    </picture>
  )
}

export default ImgForHotelPriv