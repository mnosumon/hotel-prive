import React from 'react'

const Ancor = ({content, className, href }) => {
  return (
    <a href={href} className={`text-lg tracking-[1.5px] text-color-primary font-roboto leading-[26px] font-semibold ${className}`}>{content}</a>
  )
}

export default Ancor