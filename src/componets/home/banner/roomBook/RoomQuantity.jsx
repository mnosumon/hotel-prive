import React from 'react'
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

const RoomQuantity = ({ conent, quantity, setQuantity }) => {
  return (
    <div className="mb-4 w-1/2">
    <label className=" block text-gray-700 text-sm font-bold mb-2">{conent}</label>
    <div className="flex items-center">
      <button
        type="button"
        onClick={() => setQuantity(quantity - 1)}
        disabled={quantity <= 0}
        className="px-2 py-1 bg-gray-300 text-gray-800 rounded-l"
      >
        <FaArrowDown />
      </button>
      <input
        type="text"
        readOnly
        value={quantity}
        className="w-12 text-center border-t border-b border-gray-300"
      />
      <button
        type="button"
        onClick={() => setQuantity(quantity + 1)}
        className="px-2 py-1 bg-gray-300 text-gray-800 rounded-r"
      >
        <FaArrowUp />
      </button>
    </div>
  </div>
  )
}

export default RoomQuantity