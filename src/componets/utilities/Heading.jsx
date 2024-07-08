import React from 'react'

const Heading = ({className, content}) => {
  return (
    <h1 className={`text-color-neutral-0 text-4xl md:text-[64px] text-center leading-10 md:leading-[72px] tracking-[-0.5px] font-DE_Grund font-bold ${className}`}>{content}</h1>
  )
}

export default Heading