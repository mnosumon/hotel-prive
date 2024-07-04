import React from 'react'

const Button = ({className, content}) => {
  return (
    <a className={`${className}`} href="#">{content}</a>
  )
}

export default Button