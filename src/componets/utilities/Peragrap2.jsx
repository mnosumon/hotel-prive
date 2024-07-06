import React from 'react'

const Peragrap2 = ({content, className}) => {
  return (
    <p className={`font-bold text-lg leading-[2rem] text-color-neutral-80 font-roboto mt-8 mb-5 px-2 sm:px-0 ${className}`}>{content}</p>
  )
}

export default Peragrap2