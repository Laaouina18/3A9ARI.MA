import React from 'react';
import { useLocation } from 'react-router-dom';
const HouseInfo = ({ house }) => {
	
  const handleSendMessage = () => {
    console.log("Sending message to owner...");
  }
  return (
    <div className="flex max-sm:flex-col">
      <div className="sm:w-1/2 sm:mx-auto">
        <img src={house.Home_pic} alt="" />
      </div>
      <div className="sm:w-1/2 mx-auto">
        <h2 className="text-[#192BAA] text-3xl font-bold text-center m-8">{house.Type}</h2>
        <div className="mx-6">
          <span className="flex text-[#616571] font-medium my-4">{house.Description}</span>
          <div>
            <button onClick={handleSendMessage} className="p-2 bg-[#DA6217] text-white flex space-x-4 text-sm font-medium rounded-lg m-2 mx-auto">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-send" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M10 14l11 -11" />
                <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5" />
              </svg>
              <span>Send Message to Owner</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HouseInfo;
