import React from 'react'
import Heading2 from '../../utilities/Heading2'
import ListItem from '../../utilities/ListItem'
import RightArrow from '../../utilities/RightArrow'
import Ancor from '../../utilities/Ancor'

const FooterRoompart = () => {
  return (
    <div className="">
        <Heading2 content="Rooms & Suits" />
        <ul className='mt-5 flex flex-col gap-3'>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Classic" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Superior" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Deluxe" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Master" />
            </ListItem>
        </ul>
    </div>
  )
}

export default FooterRoompart