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
        <div className="container py-32">
          <div className="">
            <FooterAddressPart/>
            <FooterMenuPart/>
            <FooterRoompart/>
            <FooterStayPart/>
            <FooterAwardPart/>
          </div>
          <Peragrap3 className="mt-20 text-center !leading-5 !text-sm" content="Copyright © 2021 Hôtel Privé. All Rights Reserved." />
        </div>
    </div>
    </>
  )
}

export default Footer