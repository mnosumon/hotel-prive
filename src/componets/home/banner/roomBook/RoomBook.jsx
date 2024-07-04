import React, { useState } from 'react';
import CatchData from './CatchData';
import RoomQuantity from './RoomQuantity';

const RoomBook = () => {
  const [arrivalDate, setArrivalDate] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ arrivalDate, departureDate, adults, children });
  };

  return (
    <div className="bg-[#21160E]/50">
      <div className="container">
        <form onSubmit={handleSubmit} className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="md:flex justify-between gap-8">
            <CatchData content="Arrival Date" day="15" month="April, 2024" weklyDay="Friday" />
            <CatchData content="Departure Date" day="27" month="April, 2024" weklyDay="monday" />
          </div>
          <div className="flex justify-between gap-8">
            <div className="flex w-1/2 gap-4 md:gap-8">
              <RoomQuantity conent="Adults" quantity={adults} setQuantity={setAdults} />
              <RoomQuantity conent="Children" quantity={children} setQuantity={setChildren} />
            </div>
            <div className="flex items-center justify-between w-1/2 ">
              <button
                type="submit"
                className="bg-color-primary hover:bg-color-primary-lighter transition-all duration-500 text-color-neutral-0 py-4 tracking-[1.2px] uppercase text-lg leading-8 w-full"
              >
                Check Availability
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RoomBook;