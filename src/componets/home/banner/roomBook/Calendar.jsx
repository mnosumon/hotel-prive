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
    <div className="p-4 max-w-md mx-auto bg-white shadow-lg rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <button>
        <AiOutlineLeft size={24} />
        </button>
        <div className="text-xl font-semibold">{month}</div>
        <button>
          <AiOutlineRight size={24} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-sm">
        {daysOfWeek.map((day) => (
          <div key={day} className="p-2 text-center font-semibold">{day}</div>
        ))}
        {daysInMonth.flat().map((day, index) => (
          <div className='p-2 text-center'>
            {day}
          </div>
        ))}
      </div>
      {/* <div
            key={index}
            className={`p-2 text-center ${day === 9 ? 'bg-blue-500 text-white' : ''} ${typeof day === 'string' ? 'text-gray-400' : ''}`}
          > */}
    </div>
  );
};

export default Calendar;