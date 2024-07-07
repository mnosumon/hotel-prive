import React from 'react'

const Paeragrap1 = ({content, className}) => {
  return (
    <p className={`md:text-lg text-sm md:leading-[2rem] text-color-neutral-80 font-roboto px-2 sm:px-0 ${className}`}>{content}</p>
  )
}

export default Paeragrap1