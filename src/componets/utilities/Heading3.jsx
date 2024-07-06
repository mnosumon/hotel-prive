import React from 'react'

const Heading3 = ({content, className}) => {
  return (
    <h4 className={`text-[2.25rem] leading-[3rem] text-color-neutral font-fahkwang tracking-[-0.5px] px-2 sm:px-0 ${className}`}>{content}</h4>
  )
}

export default Heading3