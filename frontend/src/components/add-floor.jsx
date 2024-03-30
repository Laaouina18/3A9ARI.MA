import React, { useState, useEffect } from 'react';
import AddRoom from './add-room';
import { useDispatch, useSelector } from 'react-redux';
import { addFloor, deleteRoom, updateFloor } from '../redux/actions/Actions';
import { useNavigate, useLocation } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

const AddFloor = () => {
  const location = useLocation();
  const update = location.state && location.state.update;
  const floorData = location.state && location.state.floorData;
  const totalFloors = useSelector(state => state.totalFloors);
  const currentFloor = useSelector(state => state.currentfloor);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [position, setPosition] = useState(0);
  const [RoomNbrs, setRoomNbrs] = useState(0);
  const [floor, setFloor] = useState({
    House: "",
    floorNumber: '1',
    Floor_pic_url: "",
  });

  useEffect(() => {
    if (update && floorData) {
      setFloor(floorData);
    }
  }, [update, floorData]);

  const onSubmitFloor = (e) => {
    e.preventDefault();
    const floorNumber = parseInt(floor.floorNumber);
    if (isNaN(floorNumber) || floorNumber <= 0) {
      alert('Veuillez entrer un numéro d\'étage valide.');
      return;
    }
    const CurrentHouse = localStorage.getItem("CurrentHouseId");
    if (update && floorData._id) {
      dispatch(updateFloor(floor, floorData._id));
      setPosition(1);
    } else {
      if (!RoomNbrs || !floor.floorNumber || !floor.Floor_pic_url) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
      }
      dispatch(addFloor({ ...floor, House: CurrentHouse }));
      setPosition(1);
      setRoomNbrs(0);
    }
    setFloor(prevFloor => ({ ...prevFloor, floorNumber: '', Floor_pic_url: '' }));
  };

  useEffect(() => {
    if (!update) {
      if (totalFloors < currentFloor) {
        localStorage.removeItem("CurrentHouseId");
        localStorage.removeItem("CurrentFloorId");
        navigate('/dashboard');
      }
    }
  }, [totalFloors, currentFloor, navigate, update]);

  const handleAddFloor = () => {
    if (update) {
      dispatch(updateFloor(floor, floorData._id));
      navigate('/dashboard');
    } else {
      setPosition(0);
    }
  };

  const handleDeleteRoom = (roomId) => {
    dispatch(deleteRoom(roomId));
  };

  const handleUpdateRoom = (room) => {
    navigate('/add-room', { state: { update: true, roomData: room } });
  };

  const handleReturnToDashboard = () => {
    navigate('/dashboard');
  }

  return (
    <div className="">
      {position === 0 ? (
        <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl">
          <div className="bg-white shadow-lg rounded-lg divide-y divide-gray-200">
            <form onSubmit={onSubmitFloor} encType="multipart/form-data">
              <h1 className="font-bold text-center text-2xl mb-5 text-gray-800">{update ? "Update" : "Add"} Floor {currentFloor}</h1>
              <div className="px-5 py-7">
                {!update && (
                  <div className="mb-4">
                    <label className="block text-gray-700 font-bold mb-2" htmlFor="roomNumbers">
                      Rooms Numbers
                    </label>
                    <input
                      value={RoomNbrs}
                      onChange={(e) => setRoomNbrs(e.target.value)}
                      type="number"
                      placeholder="Enter room numbers"
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="roomNumbers"
                    />
                  </div>
                )}
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="floorNumber">
                    Floor Number:
                  </label>
                  <input
                    type="number"
                    id="floorNumber"
                    name="floorNumber"
                    value={floor.floorNumber}
                    onChange={(e) => setFloor({ ...floor, floorNumber: e.target.value })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter floor number"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-bold mb-2" htmlFor="floorPicture">
                    Floor Picture:
                  </label>
                  <FileBase64
                    type="file"
                    name="Floor_pic_url"
                    multiple={true}
                    onDone={(file) => setFloor({ ...floor, Floor_pic_url: file[0].base64 })}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 flex justify-end rounded-b-lg">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  <span className="inline-block mr-2">Next</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 inline-block"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
		<div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-8 animate-fadeIn">
  <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Update Rooms</h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mx-auto">
    {floorData.Rooms && floorData.Rooms.length > 0 ? (
      floorData.Rooms.map((room, index) => (
        <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    className="w-full h-48 object-cover"
                    src={room.room_pic}
                    alt={`Room ${index + 1}`}
                  />
                  <div className="p-4 flex justify-between">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                      onClick={() => handleDeleteRoom(room._id)}
                    >
                      Delete
                    </button>
                    <button
                      className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105"
                      onClick={() => handleUpdateRoom(room)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No Rooms found.</p>
            )}
          </div>
          <div className="flex justify-center mt-8">
            <button
              onClick={handleAddFloor}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 shadow-md mr-4"
            >
              {update ? 'Update Floor' : 'Add Rooms'}
            </button>
            <button
              onClick={handleReturnToDashboard}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 transform hover:scale-105 shadow-md"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddFloor;