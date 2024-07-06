import React from 'react'
import Heading2 from '../../utilities/Heading2'
import ListItem from '../../utilities/ListItem'
import RightArrow from '../../utilities/RightArrow'
import Ancor from '../../utilities/Ancor'

const FooterStayPart = () => {
  return (
    <div className="">
        <Heading2 content="Stay Connected" />
        <ul className='mt-5 flex flex-col gap-3'>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Facebook" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Instagram" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Twitter" />
            </ListItem>
            <ListItem>
                <RightArrow/>
                <Ancor href="#" content="Tripadvisor" />
            </ListItem>
        </ul>
    </div>
  )
}

export default FooterStayPart