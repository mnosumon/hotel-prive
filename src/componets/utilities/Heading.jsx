import React from 'react'

const Heading = ({className, content}) => {
  return (
    <h1 className={`text-color-neutral-0 text-2xl sm:text-4xl lg:text-[64px] leading-[72px] tracking-[-0.5px] font-DE_Grund font-bold ${className}`}>{content}</h1>
  )
}

export default Heading