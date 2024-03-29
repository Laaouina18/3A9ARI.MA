import React, { useState, useEffect } from 'react';
import HelloWorld from '../components/HelloWord';
import HouseCard from '../components/HouseCart';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getHouses } from '../redux/actions/Actions';
import Footer from '../components/Footer';

const HousesView = ({ option }) => {
  const houses = useSelector((state) => state.Houses);
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    dispatch(getHouses());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredHouses = houses.filter(
    (house) =>
      house.Location.toLowerCase().includes(searchQuery.toLowerCase()) &&
      house.Transaction_Type === option
  );

  return (
    <div>
      <HelloWorld />
      <div className="w-full">
        <div className="bg-white py-2 px-4 flex w-fit mx-auto my-6 rounded-md">
          <i className="fa-solid fa-location-dot text-[#192BAA] p-[4px] text-lg" />
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search By Location..."
            className="placeholder:italic text-[#9599A6] text-sm p-[4px] font-medium focus:outline-none w-[300px] sm:w-[200px] sm:text-xs"
          />
          <button className="px-8 py-2 text-xs font-bold bg-[#192BAA] text-white rounded-lg sm:px-2">
            Search
          </button>
        </div>
      </div>
      <div className="m-6 flex flex-wrap justify-center">
        {filteredHouses.map((house, index) => (
          <div key={house._id} className="p-2 w-1/3">
            {index % 3 === 0 && <div className="w-full" />}
            <HouseCard house={house} />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default HousesView;