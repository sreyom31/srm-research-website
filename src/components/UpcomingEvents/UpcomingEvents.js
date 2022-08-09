import React, { useState } from 'react';
import { data } from './data';
import Event from './Event';

const UpcomingEvents = () => {
  const [event, setEvent] = useState([]);
  const [active, setActive] = useState(0);
  return (
    <div className="h-[100vh]">
      <div className="w-screen h-[25vh] mt-20  text-center bg-black ">
        <h2 className="text-3xl pt-12 overflow-hidden text-white font-bold">
          Upcoming Conferences
        </h2>
        <div className="flex flex-wrap justify-center mt-4 ">
          <a className="text-md text-blue-400 hover:text-white" href="#">
            Home
          </a>
          <p className="text-md text-white"> / Upcoming Conferences</p>
        </div>
      </div>
      <div className="w-screen h-fit mt-16 md:mt-24 px-2 md:px-[15vw]">
        <div className="mt-5 flex flex-wrap justify-center md:justify-start">
          {data.map((item) => {
            return (
              <button
                key={item.id}
                className={`p-2 px-8 mx-2 text-sm md:p-4 md:px-12 md:mx-4 min-w-fit mt-4 lg:mt-0 text-white 
                ${active == item.id ? 'bg-[#002162]' : 'bg-[#ff3600]'}
                hover:bg-slate-400`}
                onClick={() => {
                  setActive(item.id);
                  setEvent(item.conferences);
                }}
                value={item.id}
              >
                {item.month}
              </button>
            );
          })}
        </div>
        <div className="mt-5">
          <Event id={event} />
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
