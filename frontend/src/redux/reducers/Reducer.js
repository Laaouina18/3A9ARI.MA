import { actionTypes } from "../types/action-Types";

const intialState = {
   Houses: [],
   Floors: [],
   Rooms: [],
   user: {},
   totalFloors: 0,
   currentfloor: 1,
   CurrentHouse:"",
   error: "",
};
const Reducer = (state = intialState, { type, payload }) => {
	
    switch (type) {
		case actionTypes.LOGIN_SUCCESS:
			return { ...state, user: payload, error: "" };
		case actionTypes.LOGIN_FAILURE:
			return { ...state, error: payload };
		case actionTypes.SIGNIN_SUCCESS:
			return { ...state, user: payload, error: "" };
		case actionTypes.SIGNIN_FAILURE:
			return { ...state, error: payload };
		case actionTypes.GET_HOUSES:
			return { ...state, Houses: payload };
		case actionTypes.GET_FLOORS:
			return { ...state, Floors: payload };
		case actionTypes.GET_ROOMS:
			return { ...state, Rooms: payload };
		case actionTypes.ADD_HOUSE:
			return { ...state, Houses: [...state.Houses, payload] };
		case actionTypes.ADD_FLOOR:
			return { ...state, Floors: [...state.Floors, payload] };
		case actionTypes.ADD_ROOM:
			return { ...state, Rooms: [...state.Rooms, payload] };
		case actionTypes.UPDATE_HOUSE:
			return { ...state, Houses: state.Houses.map((house) => (house._id === payload._id ? payload : house)) };
		case actionTypes.UPDATE_FLOOR:
			return { ...state, Floors: state.Floors.map((floor) => (floor._id === payload._id ? payload : floor)) };
		case actionTypes.UPDATE_ROOM:
			return { ...state, Rooms: state.Rooms.map((room) => (room._id === payload._id ? payload : room)) };
		case actionTypes.DELETE_HOUSE:
			return { ...state, Houses: state.Houses.filter((house) => house._id !== payload) };
		case actionTypes.DELETE_FLOOR:
			return { ...state, Floors: state.Floors.filter((floor) => floor._id !== payload) };
		case actionTypes.DELETE_ROOM:
			return { ...state, Rooms: state.Rooms.filter((room) => room._id !== payload) };
		case actionTypes.SET_TOTAL_FLOORS:
			return { ...state, totalFloors: payload };
		case actionTypes.SET_CURRENT_FLOOR:
			return { ...state, currentfloor: payload };
		case actionTypes.CLEAR:
			return { ...state, totalFloors: 0, currentfloor: 1 };
		case actionTypes.GET_HOUSE:
			return { ...state, CurrentHouse: payload };

		default:
			return state;
			
    }
};

export { Reducer };
