import React, { useState, useEffect } from 'react';

const FloorInfo = () => {
  const [room, setRoom] = useState({});
  const floor= {
	Rooms: [
	  {
		RoomArea: '25 sqm',
		RoomPic: 'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2016/06/07101922/19ad-Northwest.jpg',
		RoomType: 'Chambre',
		WindowsNbrs: 2,
		description: 'Ceci est la chambre principale avec salle de bain attenante.',
	  },
	  {
		RoomArea: '20 sqm',
		RoomPic: 'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2016/06/07101922/19ad-Northwest.jpg',
		RoomType: 'Chambre',
		WindowsNbrs: 1,
		description: 'Ceci est la deuxième chambre.',
	  },
	  {
		RoomArea: '15 sqm',
		RoomPic: 'https://s3.amazonaws.com/homestratosphere/wp-content/uploads/2016/06/07101922/19ad-Northwest.jpg',
		RoomType: 'Salon',
		WindowsNbrs: 3,
		description: 'Ceci est le salon.',
	  },
	],
  };


  
  const roomInfo = (i) => {
    setRoom(floor.Rooms[i]);
  };

  return (
    <div>
      <div className="m-4">
        <ul className="text-sm space-x-2 flex font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow ">
          {floor.Rooms.map((room, i) => (
            <li
              key={i}
              onClick={() => roomInfo(i)}
              className="active:bg-gray-300 w-full p-4 bg-white text-[#192BAA] hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              Room {i + 1}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex max-sm:flex-col space-x-2">
        <div className="sm:w-1/2 sm:mx-auto">
          <img src={room.RoomPic} alt="" />
        </div>
        <div className="sm:w-1/2 mx-auto">
          <div>
            <h3 className="text-[#192BAA] text-lg font-bold ">Room description :</h3>
            <span className="flex text-[#616571] font-medium my-4">{room.description}</span>
          </div>
          <div className="text-[#DA6217] font-medium text-md flex space-x-4 my-[4px] mx-4">
            <div className="text-[#DA6217] w-fit p-[2px] rounded-lg bg-[#FFD3B8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-window"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M12 3c-3.866 0 -7 3.272 -7 7v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1 -1v-10c0 -3.728 -3.134 -7 -7 -7z"></path>
                <path d="M5 13l14 0"></path>
                <path d="M12 3l0 18"></path>
              </svg>
            </div>
            <span>Windows : {room.WindowsNbrs}</span>
          </div>
          <div className="text-[#DA6217] font-medium text-md flex space-x-4 my-[4px] mx-4">
            <div className="text-[#DA6217] w-fit p-[2px] rounded-lg bg-[#FFD3B8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-door"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 12v.01"></path>
                <path d="M3 21h18"></path>
                <path d="M6 21v-16a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v16"></path>
              </svg>
            </div>
            <span>Room Type : {room.RoomType}</span>
          </div>
          <div className="text-[#DA6217] font-medium text-md flex space-x-4 my-[4px] mx-4">
            <div className="text-[#DA6217] w-fit p-[2px] rounded-lg bg-[#FFD3B8]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.512 2.25l4.179-2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3"/>
</svg>
            </div>
            <span>Room Area : {room.RoomArea}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloorInfo;
