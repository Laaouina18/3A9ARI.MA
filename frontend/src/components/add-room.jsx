import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRoom, setCurrentFloor ,updateRoom} from '../redux/actions/Actions';
import AddFloor from './add-floor';
import FileBase64 from 'react-file-base64';
import { useLocation } from 'react-router-dom';
const AddRoom = ({ floorPosition, roomNbrs, totalFloors }) => {
    const floorNumber = useSelector(state => state.currentfloor);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [position, setPosition] = useState(1);
const location = useLocation();
const roomData = location.state && location.state.roomData;
const update = location.state && location.state.update;
    const [room, setRoom] = useState({
        roomNumber: position,
        room_pic: "",
        Floor: "",
        House:"",
        roomArea: "",
        roomType: "",
        description: ""
    });

    const handleChange = (e) => {
        const { name, value} = e.target;

            setRoom({ ...room, [name]: value });
        
    };

    const onSubmitRoom = (e) => {
        e.preventDefault();
		if (update && roomData._id) {
			
			dispatch(updateRoom(room, roomData._id));
			setPosition(position + 1);
			setRoom({
				roomNumber: position,
				room_pic: "",
				Floor: "",
				House:"",
				roomArea: "",
				roomType: "",
				description: ""
			});
		navigate('/dashboard');
		}
		if (!room.roomArea || !room.roomType || !room.description) {
            alert("Veuillez remplir tous les champs obligatoires.");
            return;
        }
		const floorId = localStorage.getItem("CurrentFloorId");
		const currentHouse=localStorage.getItem("CurrentHouseId");
        dispatch(addRoom({ ...room, Floor: floorId, House: currentHouse }));
        setPosition(position + 1);
        setRoom({
            roomNumber: position,
            room_pic: "",
            Floor: "",
            House: "",
            roomArea: "",
            roomType: "",
            description: ""
        });
        if (position >= roomNbrs) {
			console.log("floorNumber",floorNumber)
            dispatch(setCurrentFloor(parseInt(floorNumber + 1)));
            navigate('/add-floor');
        }
    };
	useEffect(() => {
		if (update && roomData) {
			setRoom({
				roomNumber: position,
				room_pic: roomData.room_pic,
				roomArea: roomData.roomArea,
				roomType: roomData.roomType,
				description: roomData.description

			});
		}
	}
	, [update, roomData]);

    return (
		<div className="">
		<div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl">
		  <h1 className="font-bold text-center text-2xl mb-5 text-gray-800">{update?"Update":"Add"} Room {position}</h1>
		  <div className="bg-white shadow-lg rounded-lg divide-y divide-gray-200">
			<form onSubmit={onSubmitRoom} encType="multipart/form-data">
			  <div className="px-5 py-7">
				<div className="mb-4">
				  <label className="block text-gray-700 font-bold mb-2" htmlFor="roomArea">
					Room Area
				  </label>
				  <input
					required
					value={room.roomArea}
					onChange={handleChange}
					name="roomArea"
					type="text"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="roomArea"
					placeholder="Enter room area"
				  />
				</div>
				<div className="mb-4">
				  <label className="block text-gray-700 font-bold mb-2" htmlFor="roomPicture">
					Room Picture
				  </label>
				  <FileBase64
					type="file"
					name="room_pic"
					multiple={true}
					onDone={(file) => setRoom({ ...room, room_pic: file[0].base64 })}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				  />
				</div>
				<div className="mb-4">
				  <label className="block text-gray-700 font-bold mb-2" htmlFor="roomType">
					Room Type
				  </label>
				  <input
					value={room.roomType}
					onChange={handleChange}
					name="roomType"
					required
					type="text"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="roomType"
					placeholder="Enter room type"
				  />
				</div>
				<div className="mb-4">
				  <label className="block text-gray-700 font-bold mb-2" htmlFor="description">
					Description
				  </label>
				  <textarea
					value={room.description}
					onChange={handleChange}
					name="description"
					required
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					rows="3"
					placeholder="Enter description"
				  ></textarea>
				</div>
			  </div>
			  <div className="bg-gray-50 px-4 py-3 flex justify-end rounded-b-lg">
				<button
				  type="submit"
				  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
				  <span className="inline-block mr-2">Submit</span>
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
	  </div>
    );
};

export default AddRoom;
