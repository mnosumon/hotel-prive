import React from 'react'

const Heading2 = ({className, content}) => {
  return (
    <h3 className={`text-[1.5rem] leading-[2rem] text-color-neutral-0 font-fahkwang tracking-[-0.5px] capitalize ${className}`}>{content}</h3>
  )
}

export default Heading2