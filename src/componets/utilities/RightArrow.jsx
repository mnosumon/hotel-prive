import React from 'react'

const RightArrow = ({className}) => {
  return (
    <div className={`relative h-[2px] w-8 bg-color-primary after:content-[''] after:absolute after:w-0 after:h-0 after:border-b-[4px] after:border-t-[4px] after:border-l-[12px] after:border-solid after:border-y-transparent after:border-l-color-primary after:top-1/2 after:left-full after:-translate-y-1/2 ${className}`}></div>
  )
}

export default RightArrow