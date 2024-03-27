import { createStore, applyMiddleware } from "redux";
import {thunk } from "redux-thunk";
import {Reducer} from "./reducers/Reducer";
import { composeWithDevTools } from '@redux-devtools/extension';


const store = createStore(Reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;