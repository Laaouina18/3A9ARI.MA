import React, { useEffect, useState } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addRoom, setCurrentFloor } from '../redux/actions/Actions';
import AddFloor from './add-floor';
import FileBase64 from 'react-file-base64';
const AddRoom = ({ floorPosition, roomNbrs, totalFloors }) => {
 
    const floorNumber = useSelector(state => state.currentfloor);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [position, setPosition] = useState(1);
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

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl">
                <h1 className="font-bold text-center text-2xl mb-5">Add Room {position}</h1>
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                    <form onSubmit={onSubmitRoom} encType="multipart/form-data">
                        <div className="px-5 py-7">
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Room Area</label>
                                <input
                                    required
                                    value={room.roomArea}
                                    onChange={handleChange}
                                    name="roomArea"
                                    type="text"
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                />
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Room Picture</label>
								<FileBase64
                    type="file"
					name="room_pic"
                    multiple={ true }
					onDone={(file) =>setRoom({ ...room,room_pic: file[0].base64 })}
					/>
                            </div>
                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Room Type</label>
                                <input
                                    value={room.roomType}
                                    onChange={handleChange}
                                    name="roomType"
                                    required
                                    type="text"
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                />
                            </div>

                            <div>
                                <label className="font-semibold text-sm text-gray-600 pb-1 block">Description</label>
                                <textarea
                                    value={room.description}
                                    onChange={handleChange}
                                    name="description"
                                    required
                                    className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                ></textarea>
                            </div>
                        </div>
                        <button
                            type="submit"
                            className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-                            focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                        >
                            <span className="inline-block mr-2">Submit</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddRoom;
