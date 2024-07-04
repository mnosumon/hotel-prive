import React from 'react'

const CatchData = ({ content, day, month, weklyDay}) => {
  return (
    <div className="mb-4 md:w-1/2 border-b-2 border-color-neutral-0">
        <label className="block text-color-neutral-20 uppercase tracking-[1.2px] text-sm font-normal mb-2">{content}</label>
        <p className="w-full bg-transparent outline-none text-color-neutral-0 text-5xl leading-[56px] flex items-center gap-4">
          <span>{day}</span>
          <div className="flex flex-col gap-1">
            <span className='text-base leading-4 tracking-[2px] text-color-neutral-0 font-bold'>{month}</span>
            <span className='text-sm tracking-[1.2px] uppercase text-color-neutral-20'>{weklyDay}</span>
          </div>
        </p>
    </div>
  )
}

export default CatchData