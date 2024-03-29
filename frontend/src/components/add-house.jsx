import React, { useEffect, useState } from 'react';
import AddFloor from './add-floor';
import { useDispatch, useSelector } from 'react-redux';
import { addHouse, updateHouse, setTotalFloors, getHouse } from '../redux/actions/Actions';
import { useLocation } from 'react-router-dom';
import FileBase64 from 'react-file-base64';
import { useNavigate } from 'react-router-dom';

const AddHouse = () => {
	const Navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem('user'))._id;
  const location = useLocation();
  const update = location.state && location.state.update;
  const Current = useSelector((state) => state.CurrentHouse);
  const [position, setPosition] = useState(1);
  const [floorNumber, setFloorNumber] = useState(0);
  const [house, setHouse] = useState({
    Type: '',
    Home_pic: '',
    Location: '',
    House_Area: '',
    Description: '',
    Price: '',
    Owner: userId,
    Transaction_Type: '',
  });
  const [floors, setFloors] = useState([]); // Étages

  useEffect(() => {
    console.log('CurrentHouse:', Current);
  }, [Current]);

  useEffect(() => {
    if (update) {
      dispatch(getHouse(location.state.house._id));
      console.log('hdkjjk', Current);
      const houseData = location.state && location.state.house;
      if (houseData) {
        setHouse(houseData);
        const id = houseData._id;
      }
    }
  }, [update, location.state]);

  const dispatch = useDispatch();

  // Gestion de la soumission du formulaire de maison
  const onSubmitHouse = (e) => {
    e.preventDefault();

  
    if (isNaN(house.Price)) {
      alert('Le prix doit être un nombre.');
      return;
    }
    if (update) {
      console.log(house.Floors);
      dispatch(updateHouse(house, house._id));
      setHouse({
        Type: '',
        Home_pic: '',
        Location: '',
        House_Area: '',
        Description: '',
        Price: '',
        Owner: userId,
        Transaction_Type: '',
      });
      setPosition(2);
    } else {
		if (
			!house.House_Area ||
			!house.Location ||
			!house.Price ||
			!house.Description ||
			!house.Transaction_Type ||
			!house.Type ||
			!floorNumber ||
			!house.Home_pic
		  ) {
			alert('Veuillez remplir tous les champs obligatoires.');
			return;
		  }
      dispatch(addHouse(house));
      dispatch(setTotalFloors(floorNumber));
      setHouse({
        Type: '',
        Home_pic: '',
        Location: '',
        House_Area: '',
        Description: '',
        Price: '',
        Owner: userId,
        Transaction_Type: '',
      });
      setPosition(3);
    }
  };
  const handleUpdateFloor = (floorData) => {
	Navigate('/add-floor', { state: { floorData, update: true } });
  };
  const handleReturnToDashboard = () => {
	Navigate("/dashboard");
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {position === 1 && (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
            {update ? 'Update House' : 'Add House'}
          </h1>
          <form onSubmit={onSubmitHouse} encType="multipart/form-data">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="houseName" className="block text-gray-700 font-bold mb-2">
                  House Area:
                </label>
                <input
                  type="number"
                  id="houseName"
                  name="House_Area"
                  value={house.House_Area}
                  onChange={(e) => setHouse({ ...house, House_Area: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter house area"
                  required
                />
              </div>
              <div>
                <label htmlFor="location" className="block text-gray-700 font-bold mb-2">
                  Location:
                </label>
                <input
                  type="text"
                  id="location"
                  name="Location"
                  value={house.Location}
                  onChange={(e) => setHouse({ ...house, Location: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter location"
                  required
                />
              </div>
              <div>
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
                  Price:
                </label>
                <input
                  type="number"
                  id="price"
                  name="Price"
                  value={house.Price}
                  onChange={(e) => setHouse({ ...house, Price: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter price"
                  required
                />
              </div>
              <div>
                <label htmlFor="description" className="block text-gray-700 font-bold mb-2">
                  Description:
                </label>
                <textarea
                  id="description"
                  name="Description"
                  value={house.Description}
                  onChange={(e) => setHouse({ ...house, Description: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter description"
                  required
                />
              </div>
              <div>
                <label htmlFor="transactionType" className="block text-gray-700 font-bold mb-2">
                  Transaction Type:
                </label>
                <select
                  id="transactionType"
                  name="Transaction_Type"
                  value={house.Transaction_Type}
                  onChange={(e) => setHouse({ ...house, Transaction_Type: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  required
                >
                  <option value="">Select transaction type</option>
                  <option value="Rent">Rent</option>
                  <option value="Buy">Buy</option>
                </select>
              </div>
              <div>
                <label htmlFor="houseType" className="block text-gray-700 font-bold mb-2">
                  House Type:
                </label>
                <input
                  type="text"
                  id="houseType"
                  name="Type"
                  value={house.Type}
                  onChange={(e) => setHouse({ ...house, Type: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter house type"
                  required
                />
              </div>
			  {
				!update && (
					
					<div>
                <label htmlFor="floorNumber" className="block text-gray-700 font-bold mb-2">
                  Floor Number:
                </label>
                <input
                  type="text"
                  id="floorNumber"
                  value={floorNumber}
                  onChange={(e) => setFloorNumber(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
                  placeholder="Enter floor number"
                  required
                />
              </div>
				)

			  }
              <div>
                <label htmlFor="homePic" className="block text-gray-700 font-bold mb-2">
                  House Picture:
                </label>
                <FileBase64
                  type="file"
                  name="Home_pic"
                  multiple={true}
                  onDone={(file) => setHouse({ ...house, Home_pic: file[0].base64 })}
                />
              </div>
            </div>
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 shadow-md"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      )}
      {position === 2 && (
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
          <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Update Floors</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {Current.Floors && Current.Floors.length > 0 ? (
              Current.Floors.map((floorId, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={floorId.Floor_pic_url}
                    alt={`Floor ${index + 1}`}
                  />
                  <div className="p-4 flex justify-between">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                      onClick={() => handleDeleteFloor(floorId)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                      onClick={() => handleUpdateFloor(floorId)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No floors found.</p>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleReturnToDashboard}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 shadow-md"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
      {position === 3 && <AddFloor />}
    </div>
  );
};

export default AddHouse;