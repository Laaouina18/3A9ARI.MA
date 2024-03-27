import React, { useState } from 'react';
import HouseInfo from '../components/HouseInfo';
import FloorInfo from '../components/Floor-info';
import HelloWorld from '../components/HelloWord';
import { useLocation } from 'react-router-dom';
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
      <div>
        <div className="min-h-[60vh] h-fit rounded-lg m-4 relative">
          <img src={house.Home_pic} className="h-full w-full brightness-50 absolute rounded-lg" alt="" />
          <div className="absolute w-full">
            <h2 className="text-white text-3xl font-bold text-center m-8 ">{house.Type}</h2>
            <p className="font-medium text-white p-2 mx-auto w-3/4 text-center">{house.Description}</p>
          </div>
          <p className="absolute top-[85%] font-bold text-[#DA6217] text-lg p-2">{house.House_Area}</p>
        </div>
        <div className="m-4">
          <div className="bg-[#F0F2F8] border border-[1px] border-gray-300 p-2 rounded-lg">
            <ul className="text-sm font-medium text-center text-gray-500 divide-x divide-gray-200 rounded-lg shadow sm:flex">
              <li className="w-full">
                <button onClick={() => setShowHouse(true)} className="inline-block w-full p-4 text-gray-900 bg-gray-100 rounded-l-lg focus:ring-4 focus:ring-blue-300 active focus:outline-none " aria-current="page">
                  <span className="mx-auto flex w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                  <button onClick={() => showFloor(i + 1)} className="inline-block w-full p-4 bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none ">
                    Floor {i + 1}
                  </button>
                </li>
              ))}
            </ul>
            {showHouse ? <HouseInfo house={house} /> : <FloorInfo floor={floor} />}
          </div>
        </div>
      </div>
	  <footer className="bg-gray-800 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">
          Contact Information
        </h4>
        <ul className="text-gray-400">
          <li className="mb-2 flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            123 Main Street, City, State
          </li>
          <li className="mb-2 flex items-center">
            <i className="fas fa-phone mr-2"></i>
            (123) 456-7890
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            info@example.com
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
        <p className="text-gray-400 mb-4">
          Subscribe to our newsletter to receive updates and special offers.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-gray-700 text-white py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-8">
      <p className="text-gray-400 text-center">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </div>
  </div>
</footer>
    </div>
  );
}

export default HouseDetail;
