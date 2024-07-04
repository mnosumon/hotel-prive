import React from 'react'

const CatchData = ({ conent, date, setDate }) => {
  return (
    <div className="mb-4 md:w-1/2">
        <label className="block text-color-neutral-20 uppercase tracking-[1.2px] text-sm font-normal mb-2">{conent}</label>
        <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
    </div>
  )
}

export default CatchData