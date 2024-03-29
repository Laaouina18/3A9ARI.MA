
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './redux/store';
import Home from './pages/Home';
import Login from './components/LoginForm';
import HouseDetail from './pages/HouseDetail';
import { Provider } from 'react-redux';
import HousesView from './pages/Houses';
import MessagesDashboard from './pages/Messages';
import AddFloor from './components/add-floor';
import AddRoom from './components/add-room';
import FloorInfo from './components/Floor-info';
import Register from './components/RegisterForm';
import AddHouse from './components/add-house';
import OwnerDashboard from './pages/DashboradOwner';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';
import PrivetRoute from './PrivetRoute';
const App = () => {
	const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
		  <Route path="/login" element={<Login/>}/>
		  <Route path="/detail" element={<HouseDetail/>}/>
		  <Route path="/Rent" element={<HousesView option="Rent"/>}/>
		  <Route path="/Buy" element={<HousesView option="Buy"/>}/>
		  <Route path="/messages" element={<MessagesDashboard/>}/>
		  <Route path="/floor-info" element={<FloorInfo/>}/>
		  <Route path="/register" element={<Register/>}/>
		  <Route  element={<PrivetRoute />} >
		  <Route path="/Dashboard" element={<OwnerDashboard/>}/>
		  <Route path="/add-house" element={<AddHouse/>}/>
		  <Route path="/add-floor" element={<AddFloor/>}/>
		  <Route path="/add-room" element={<AddRoom/>}/>
		  </Route>
		  <Route path="/contact" element={<Contact/>}/>
		  <Route path="/about" element={<About/>}/>
		  <Route path="*" element={<NotFound />} />
        </Routes>
      </Provider>
    </Router>
  );
};

export default App;
