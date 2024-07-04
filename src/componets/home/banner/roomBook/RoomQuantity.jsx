import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const RoomQuantity = ({ conent, quantity, setQuantity }) => {
  return (
    <div className="mb-4 w-1/2">
    <label className="block text-color-neutral-20 uppercase tracking-[1.2px] text-sm font-normal mb-2">{conent}</label>
    <div className="flex items-center justify-between">
      <input
        type="text"
        readOnly
        value={quantity}
        className="w-12 text-center border-t border-b border-gray-300"
      />
      <div className="flex flex-col">
        <button type='button' onClick={() => setQuantity(quantity + 1)} disabled={quantity < 0}>
        <FaAngleUp className='text-color-neutral-0 text-xl' />
        </button>
        <button type='button' onClick={() => setQuantity(quantity - 1)} disabled={quantity <= 0}>
        <FaAngleDown className='text-color-neutral-0 text-xl' />
      </button>
      </div>
    </div>
  </div>
  )
}

export default RoomQuantity