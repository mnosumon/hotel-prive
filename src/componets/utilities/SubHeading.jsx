import React from 'react'

const SubHeading = ({className, content, children}) => {
  return (
    <div className="flex gap-3 md:gap-6 items-center">
      {children}
      <h3 className={`text-color-neutral-15 text-sm uppercase leading-4 inline-flex items-center tracking-[4px]  ${className}`}>{content}</h3>
    </div>
  )
}

export default SubHeading