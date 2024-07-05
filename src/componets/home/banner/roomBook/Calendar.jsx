import React from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Calendar = () => {
  const month = "September 2021";
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = [
    ["30", "31", 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, "1", "2", "3"]
  ];

  return (
    <div className="bg-white">
      <div className="flex justify-between items-center bg-color-secondary-80 w-full text-color-neutral-0 font-kanit">
        <a href="#" className='w-[56px] h-full flex justify-center items-center'>
          <AiOutlineLeft className='text-2xl' />
        </a>
        <div className="text-xl leading-[56px]">{month}</div>
        <a href="#" className='w-[56px] h-full flex justify-center items-center'>
          <AiOutlineRight className='text-2xl' />
        </a>
      </div>
      <div className="">
        <div className="bg-color-secondary-60 grid grid-cols-7 gap-1 text-sm">
          {daysOfWeek.map((day) => (
            <div key={day} className="p-1 text-center text-color-neutral-0 uppercase font-roboto leading-8">{day}</div>
          ))}
        </div>
        <div className="grid grid-cols-7 gap-1 text-sm">
          {daysInMonth.flat().map((day, index) => (
            <div className='p-1 text-center border-r-[1px] leading-10 font-roboto'>
              {day}
            </div>
          ))}
        </div>
      </div>
      {/* <div
            key={index}
            className={`p-2 text-center ${day === 9 ? 'bg-blue-500 text-white' : ''} ${typeof day === 'string' ? 'text-gray-400' : ''}`}
          > */}
    </div>
  );
};

export default Calendar;