import React from 'react'

const ListItem = ({children}) => {
  return (
    <li className='flex gap-6 items-center'>
        {children}
    </li>
  )
}

export default ListItem