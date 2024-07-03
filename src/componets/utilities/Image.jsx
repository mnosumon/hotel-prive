import React from 'react'

const Image = ({className, sourc, alt}) => {
  return (
    <img className={className} src={sourc} alt={alt} />
  )
}

export default Image