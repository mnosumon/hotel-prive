import React from 'react'
import Heading2 from '../../utilities/Heading2'
import RightArrow from '../../utilities/RightArrow'
import Ancor from '../../utilities/Ancor'
import ListItem from '../../utilities/ListItem'

const FooterMenuPart = () => {
  return (
    <div className="">
        <Heading2 content="menu" />
        <ul className='mt-5 flex flex-col gap-3'>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="About" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Special Offers" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="News" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Contact Us" />
            </ListItem>
        </ul>
  </div>
  )
}

export default FooterMenuPart