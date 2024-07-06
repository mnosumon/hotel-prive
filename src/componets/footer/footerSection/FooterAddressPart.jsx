import React from 'react'
import FooterLogo from '../..//../assets/image/headerMiddle.png'
import Peragrap3 from '../../utilities/Peragrap3'
import Peragrap2 from '../../utilities/Peragrap2'

const FooterAddressPart = () => {
  return (
    <div className="w-[26%] flex flex-col gap-3">
        <picture className='mb-4'>
            <img src={FooterLogo} alt="Footer logo" />
        </picture>
        <Peragrap3 className="" content="7 Rue Caulaincourt, 75018 Paris, France" />
        <p className='flex gap-2'>
        <Peragrap2 className="!text-color-neutral-20 !my-1" content="Phone:" />
        <Peragrap3 className="" content=" +1 800 603 6035 (Viber, WhatsApp)" />
        </p>
        <p className='flex gap-2'>
        <Peragrap2 className="!text-color-neutral-20 !my-1" content="Fax:" />
        <Peragrap3 className="" content=" +1 800 889 9898" />
        </p>
        <p className='flex gap-2'>
        <Peragrap2 className="!text-color-neutral-20 !my-1" content="Email:" />
        <Peragrap3 className="!text-color-primary" content="  mail@companyname.com8" />
        </p>
    </div>
  )
}

export default FooterAddressPart