import React, { useState } from 'react';
import HouseInfo from '../components/HouseInfo';
import FloorInfo from '../components/Floor-info';
import HelloWorld from '../components/HelloWord';
import { useLocation } from 'react-router-dom';
import Footer from '../components/footer';

function HouseDetail() {
  const location = useLocation();
  const house = location.state.house;
  const [showHouse, setShowHouse] = useState(true);
  const [floor, setFloor] = useState({});

  const showFloor = (i) => {
    setFloor(house.Floors[i - 1]);
    setShowHouse(false);
  };

  return (
    <div>
      <HelloWorld />
      <div className="container mx-auto px-4">
        <div className="min-h-[60vh] h-fit rounded-lg m-4 relative">
          <img
            src={house.Home_pic}
            className="h-full w-full brightness-50 object-cover rounded-lg"
            alt={house.Type}
          />
          <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <h2 className="text-white text-3xl font-bold mb-2">{house.Type}</h2>
            <p className="text-white font-medium">{house.Description}</p>
          </div>
          <p className="absolute bottom-2 left-2 font-bold text-[#DA6217] text-lg p-2">
            {house.House_Area}
          </p>
        </div>
        <div className="m-4">
          <div className="bg-[#F0F2F8] border border-gray-300 p-2 rounded-lg">
            <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
              <li className="w-full">
                <button
                  onClick={() => setShowHouse(true)}
                  className={`inline-block w-full p-4 rounded-l-lg focus:outline-none ${
                    showHouse
                      ? 'text-gray-900 bg-gray-100'
                      : 'text-gray-700 bg-white hover:bg-gray-50'
                  }`}
                  aria-current={showHouse ? 'page' : undefined}
                >
                  <span className="mx-auto flex w-fit">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-home-2 mr-2"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z"></path>
                      <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                      <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                      <path d="M10 12h4v4h-4z"></path>
                    </svg>
                    <p>House</p>
                  </span>
                </button>
              </li>
              {house.Floors.map((floor, i) => (
                <li key={i} className="w-full">
                  <button
                    onClick={() => showFloor(i + 1)}
                    className={`inline-block w-full p-4 rounded-r-lg focus:outline-none ${
                      !showHouse && floor === house.Floors[i]
                        ? 'text-gray-900 bg-gray-100'
                        : 'text-gray-700 bg-white hover:bg-gray-50'
                    }`}
                  >
                    Floor {i + 1}
                  </button>
                </li>
              ))}
            </ul>
            {showHouse ? <HouseInfo house={house} /> : <FloorInfo floor={floor} />}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HouseDetail;