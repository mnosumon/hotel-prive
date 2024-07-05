import React from 'react'
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const CatchData = ({ content, day, month, weklyDay, openCalendar, isCalendarOpen }) => {
  return (
    <div onClick={openCalendar} className="mb-4 border-b-2 border-color-neutral-0">
        <label className="block text-color-neutral-20 uppercase tracking-[1.2px] text-sm font-normal mb-2">{content}</label>
        <div className="flex justify-between">
          <p className="bg-transparent outline-none text-color-neutral-0 text-5xl leading-[56px] flex items-center gap-4">
          <span>{day}</span>
          <div className="flex flex-col gap-1">
            <span className='text-base leading-4 tracking-[2px] text-color-neutral-0 font-bold'>{month}</span>
            <span className='text-sm tracking-[1.2px] uppercase text-color-neutral-20'>{weklyDay}</span>
          </div>
          </p>
          {isCalendarOpen ? (
            <FaAngleDown className='text-color-neutral-0 text-xl' />
          ) : (
            <FaAngleUp className='text-color-neutral-0 text-xl' />
          )}
        </div>
    </div>
  )
}

export default CatchData