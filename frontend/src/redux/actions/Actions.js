
import axios from "../../api/Axios";
import { actionTypes } from "../types/action-Types";


const Signin = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/inscrir", user);

			dispatch({ type: actionTypes.SIGNIN_SUCCESS, payload: response.data });
		} catch (error) {
			dispatch({ type: actionTypes.SIGNIN_FAILURE, payload: error.response.data.message });
		}
	

	};
};
const Login = (user) => {
	return async (dispatch) => {
		try {
			const response = await axios.post("/auth/login", user);

			dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: response.data });
		} catch (error) {

			dispatch({ type: actionTypes.LOGIN_FAILURE, payload: error.response.data.message });
		}

	};
};
const addRoom= (room)=>{
	return async (dispatch)=>{

			const response =await axios.post("/Rooms",room);
			dispatch({type:actionTypes.ADD_ROOM,payload:response.data})
	
	}
}
const addFloor=(floor)=>{
	return async (dispatch)=>{
console.log(floor)
		const response =await axios.post("/Floors",floor);
		localStorage.setItem("CurrentFloorId",response.data._id)
		dispatch({type:actionTypes.ADD_FLOOR,payload:response.data})

}
}
const addHouse=(house)=>{
	return async (dispatch)=>{
		const response =await axios.post("/Houses",house);
		localStorage.setItem("CurrentHouseId",response.data._id)
		dispatch({type:actionTypes.ADD_HOUSE,payload:response.data})
}}
const getRooms=()=>{
	return async (dispatch)=>{

		const response =await axios.get("/Rooms");
		dispatch({type:actionTypes.GET_ROOMS,payload:response.data})

}
}
const getFloors=()=>{	
	return async (dispatch)=>{

		const response =await axios.get("/Floors");
		dispatch({type:actionTypes.GET_FLOORS,payload:response.data})

}
}
const getHouses=()=>{
	return async (dispatch)=>{
		
		const response =await axios.get("/Houses");
		dispatch({type:actionTypes.GET_HOUSES,payload:response.data})
	

}
}
const updateRoom=(room)=>{
	return async (dispatch)=>{

		const response =await axios.put("/Rooms",room);
		dispatch({type:actionTypes.UPDATE_ROOM,payload:response.data})

}
}
const deleteRoom=(id)=>{
	return async (dispatch)=>{

		const response =await axios.delete(`/Rooms/${id}`);
		dispatch({type:actionTypes.DELETE_ROOM,payload:response.data})

}
}
const updateFloor=(floor)=>{
	return async (dispatch)=>{

		const response =await axios.put("/Floors",floor);
		dispatch({type:actionTypes.UPDATE_FLOOR,payload:response.data})

}
}
const deleteFloor=(id)=>{
	return async (dispatch)=>{

		const response =await axios.delete(`/Floors/${id}`);
		dispatch({type:actionTypes.DELETE_FLOOR,payload:response.data})

}
}
const updateHouse=(house,id)=>{
	return async (dispatch)=>{
		const response =await axios.put(`/Houses/${id}`,house);
		console.log(response.data);
		dispatch({type:actionTypes.UPDATE_HOUSE,payload:response.data})

}
}
const deleteHouse=(id)=>{
	return async (dispatch)=>{
	const response =await axios.delete(`/Houses/${id}`);
		dispatch({type:actionTypes.DELETE_HOUSE,payload:response.data})
		getHouses();
}}
const getHouse=(id)=>{
	return async (dispatch)=>{

		const response =await axios.get(`/Houses/${id}`);
		dispatch({type:actionTypes.GET_HOUSE,payload:response.data})

}
}
const getFloor=(id)=>{
	return async (dispatch)=>{

		const response =await axios.get(`/Floors/${id}`);
		dispatch({type:actionTypes.GET_FLOOR,payload:response.data})

}
}
const getRoom=(id)=>{
	return async (dispatch)=>{

		const response =await axios.get(`/Rooms/${id}`);
		dispatch({type:actionTypes.GET_ROOM,payload:response.data})

}
}
const setTotalFloors = (totalFloors) => ({
    type: actionTypes.SET_TOTAL_FLOORS,
    payload: totalFloors,
});
const setCurrentFloor = (currentFloor) => ({
	type: actionTypes.SET_CURRENT_FLOOR,
	payload: currentFloor,
});
const clear = () => ({
	type: actionTypes.CLEAR,
});

export { Signin, Login ,addRoom , addFloor ,addHouse,getRooms,getFloors,getHouses,updateRoom,deleteRoom,updateFloor,deleteFloor,updateHouse,deleteHouse ,getHouse,getFloor,getRoom,setTotalFloors,setCurrentFloor,clear}

