import React from 'react'

const Button = ({className, content, href}) => {
  return (
    <a className={`md:w-32 w-20 uppercase bg-color-primary text-color-neutral-0 inline-block text-sm py-1 md:py-4 text-center whitespace-nowrap hover:bg-color-primary-lighter transition-all duration-500 ${className}`} href={href}>{content}</a>
  )
}
export default Button