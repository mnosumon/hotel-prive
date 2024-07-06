import React from 'react'
import FooterAddressPart from './footerSection/FooterAddressPart'
import FooterMenuPart from './footerSection/FooterMenuPart'
import FooterRoompart from './footerSection/FooterRoompart'
import FooterStayPart from './footerSection/FooterStayPart'
import FooterAwardPart from './footerSection/FooterAwardPart'
import Peragrap3 from '../utilities/Peragrap3'

const Footer = () => {
  return (
    <>  
    <div className="bg-color-neutral-80">
      <div className="container py-16 md:py-24 lg:py-32">
        <div className="flex flex-wrap gap-y-10 -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <FooterAddressPart />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 px-4">
            <FooterMenuPart />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 px-4">
            <FooterRoompart />
          </div>
          <div className="w-full md:w-1/4 lg:w-1/6 px-4">
            <FooterStayPart />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4">
            <FooterAwardPart />
          </div>
        </div>
        <Peragrap3 className="mt-20 text-center leading-5 text-sm" content="Copyright © 2021 Hôtel Privé. All Rights Reserved." />
      </div>
    </div>
    </>
  )
}

export default Footer