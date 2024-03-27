import React, { useState, useEffect } from 'react';
import AddRoom from './add-room';
import { useDispatch, useSelector } from 'react-redux';
import { addFloor } from '../redux/actions/Actions';
import { useNavigate } from 'react-router-dom';
import FileBase64 from 'react-file-base64';

const AddFloor = () => {
    const totalFloors = useSelector(state => state.totalFloors);
    const currentFloor = useSelector(state => state.currentfloor);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [RoomNbrs, setRoomNbrs] = useState(0);
    const [floor, setFloor] = useState({
        House:"",
        floorNumber: '1',
        Floor_pic_url: "",
    });
    const [addingRooms, setAddingRooms] = useState(false);
	const onSubmitFloor = (e) => {
		e.preventDefault();
		if (!RoomNbrs || !floor.floorNumber || !floor.Floor_pic_url) {
			alert('Veuillez remplir tous les champs obligatoires.');
			return;
		}
	
		// Validation supplémentaire, par exemple vérification du format du numéro de l'étage
		const floorNumber = parseInt(floor.floorNumber);
		if (isNaN(floorNumber) || floorNumber <= 0) {
			alert('Veuillez entrer un numéro d\'étage valide.');
			return;
		}
		const CurrentHouse = localStorage.getItem("CurrentHouseId");
		dispatch(addFloor({ ...floor, House: CurrentHouse }));
		setRoomNbrs(0);
		setFloor(prevFloor => ({ ...prevFloor, floorNumber: '', Floor_pic_url: '' }));
		setAddingRooms(true);
	};
	

    useEffect(() => {
		console.log("totalFloors",totalFloors)
			console.log("currentFloor",currentFloor)
        if (totalFloors < currentFloor) {
			
			localStorage.clear();
            navigate('/owner-dashboard');
        }
    }, [totalFloors, currentFloor, navigate]);

    const handleAddFloor = () => {
        setAddingRooms(false);
	
        setFloor({
            House: "",
            floorNumber: '',  
            Floor_pic_url: "",
        });
    };

   

   

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            {addingRooms ? (
                <AddRoom
                    floorPosition={currentFloor}
                    totalFloors={totalFloors}
                    roomNbrs={parseInt(RoomNbrs)}
                    onFinishAddingRooms={handleAddFloor}
                />
            ) : (
                <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-2xl">
                    <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
                        <form onSubmit={onSubmitFloor} encType="multipart/form-data">
                            <h1 className="font-bold text-center text-2xl mb-5">Add Floor {currentFloor}</h1>
                            <div className="px-5 py-7">
                                <div>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">Rooms Numbers</label>
                                    <input
                                        value={RoomNbrs}
                                        onChange={(e) => setRoomNbrs(e.target.value)}
                                        type="number"
                                        placeholder="Enter room numbers"
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                                        Floor Number:
                                    </label>
                                    <input
                                        type="number"
                                        id="floorNumber"
                                        name="floorNumber"
                                        value={floor.floorNumber}
                                        onChange={(e) => setFloor({ ...floor, floorNumber: e.target.value })}
                                        className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                                        placeholder="Enter floor number"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="font-semibold text-sm text-gray-600 pb-1 block">
                                        Floor Picture:
                                    </label>
                                               <FileBase64
                    type="file"
					name="Floor_pic_url"
                    multiple={ true }
					onDone={(file) =>setFloor({ ...floor, Floor_pic_url: file[0].base64 })}
					/>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                            >
                                <span className="inline-block mr-2">Next</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AddFloor;
