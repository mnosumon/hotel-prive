import React from 'react'

const Ancor = ({content, className, href }) => {
  return (
    <a href={href} className={`text-base text-color-primary font-roboto leading-[26px] font-normal ${className}`}>{content}</a>
  )
}

export default Ancor