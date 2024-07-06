import React from 'react'

const SubHeading = ({className, content, children}) => {
  return (
    <div className="flex gap-3 md:gap-6 items-center pl-2 sm:pl-0">
      {children}
      <h3 className={`text-color-neutral-15 text-sm uppercase leading-4 inline-flex items-center sm:tracking-[4px] tracking-[2px]  ${className}`}>{content}</h3>
    </div>
  )
}

export default SubHeading