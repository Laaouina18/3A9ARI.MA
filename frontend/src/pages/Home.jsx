import React, { useState, useEffect } from 'react';
import HelloWorld from '../components/HelloWord';
import HousesCard from '../components/HouseCart';
import bg from "../assets/bg-1.jpg";
import bg2 from "../assets/bg-3.jpg";
import { useSelector, useDispatch } from 'react-redux';
import { getHouses } from '../redux/actions/Actions';
import Footer from '../components/footer';
const Home = () => {
    const houses = useSelector((state) => state.Houses);
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');

    useEffect(() => {
        dispatch(getHouses());
    }, []);

    const getRandomHouses = () => {
        const shuffledHouses = houses.sort(() => 0.5 - Math.random());
        return shuffledHouses.slice(0, 9);
    };

    const randomHouses = getRandomHouses();

    return (
        <div className="bg-white">
            <HelloWorld />
            {!houses.Loading ? (
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
                        <div className="lg:w-1/2 lg:pr-8 mb-8 lg:mb-0">
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-indigo-700 leading-tight mb-4 text-center lg:text-left">
                                Discover Most Suitable Property
                            </h2>
                            <p className="text-gray-600 text-lg mb-6 text-center lg:text-left">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur ad eum cupiditate itaque dolorem magnam recusandae,
                            </p>
                            <div className="flex justify-center lg:justify-start">
                                <div className="bg-white shadow-md rounded-lg px-4 py-2 flex items-center">
                                    <i className="fas fa-map-marker-alt text-indigo-700 mr-2"></i>
                                    <input
                                        onChange={(e) => setSearch(e.target.value)}
                                        value={search}
                                        type="text"
                                        placeholder="Search By Location . . ."
                                        className="text-gray-600 text-sm placeholder-gray-400 focus:outline-none w-64"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 hidden lg:block">
                            <img src={bg} alt="" className="w-full h-96 object-cover" />
                        </div>
                    </div>

                    <div className="mt-12">
                        <div className="flex justify-between items-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">Popular Residence</h2>
                            <p className="text-indigo-600 font-semibold hover:underline">View More -&gt;</p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                            {randomHouses.map((house) => (
                                <HousesCard key={house._id} house={house} />
                            ))}
                        </div>
                    </div>

                    <div className="relative">
  <div className="container mx-auto px-4 py-16">
    <div className="flex flex-col lg:flex-row items-center justify-between">
      <div className="lg:w-1/2 order-2 lg:order-1">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img
            src={bg2}
            alt="Client Services"
            className="w-full h-96 object-cover"
          />
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-12 order-1 lg:order-2 mb-8 lg:mb-0">
        <h4 className="text-orange-500 font-semibold mb-2">Services</h4>
        <h3 className="text-3xl text-indigo-700 font-bold mb-6">
          Client Services
        </h3>
        <p className="text-gray-600 text-lg mb-8">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          repellat adipisci explicabo aut. Omnis unde reprehenderit laborum,
          iste cupiditate alias ha
        </p>
        <div className="flex items-center mb-8">
          <div className="bg-indigo-100 rounded-full p-3 mr-6">
            <i className="fas fa-search text-indigo-700 text-2xl"></i>
          </div>
          <div>
            <h4 className="text-xl text-indigo-700 font-bold mb-2">
              Client Services
            </h4>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
        <a
          href="#"
          className="inline-block bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-800 transition-colors duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</div>
                </div>
            ) : (
                <div role="status" className="absolute w-full h-screen flex justify-center items-center">
                    <svg
                        className="animate-spin h-8 w-8 text-indigo-700"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                        ></circle>
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            )}
			<Footer />
        </div>
    );
};

export default Home;