import React from 'react'
import { BeforeIcon } from './svgImage/Before-icon'

const SubHeading = ({className, content}) => {
  return (
    <div className="flex gap-6 items-center">
      <BeforeIcon color="#E3E1E0" />
      <h3 className={`text-color-neutral-15 text-sm uppercase leading-4 inline-flex items-center tracking-[4px]  ${className}`}>{content}</h3>
    </div>
  )
}

export default SubHeading