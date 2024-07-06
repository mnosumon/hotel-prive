import React from 'react'
import AwardsIMG1 from '../../../assets/awardsIMG/awardsIMG1.png'
import AwardsIMG2 from '../../../assets/awardsIMG/awardsIMG2.png'
import AwardsIMG3 from '../../../assets/awardsIMG/awardsIMG3.png'
import Heading2 from '../../utilities/Heading2'

const FooterAwardPart = () => {
  return (
    <div className="">
        <Heading2 content="Our Awards" />
        <div className="flex gap-5 items-center mt-5">
            <picture className='w-20 h-auto'>
                <img className='w-full h-full object-cover' src={AwardsIMG1} alt="AwardsIMG3 logo" />
            </picture>
            <picture className='w-20 h-auto'>
                <img className='w-full h-full object-cover' src={AwardsIMG2} alt="AwardsIMG3 logo" />
            </picture>
            <picture className='w-20 h-auto'>
                <img className='w-full h-full object-cover' src={AwardsIMG3} alt="AwardsIMG3 logo" />
            </picture>
        </div>
    </div>
  )
}

export default FooterAwardPart