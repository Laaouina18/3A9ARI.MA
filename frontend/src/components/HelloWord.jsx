import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/MyHouseLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    setUser(storedUser);
  }, []);

  const openNav = () => {
    setIsOpen(true);
  };

  const closeNav = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <nav className="flex justify-between items-center relative px-4 py-6 px-12 w-full">
      <img src={logo} alt="Logo" className="w-20 h-20" />

      <i className="fa-solid fa-bars  text-2xl text-[#364BDC]" onClick={openNav}></i>

      <ul className={`flex  space-x-6 absolute z-10 top-0 right-0 flex-col md:flex-row md:space-x-6 md:space-y-0 bg-white md:bg-transparent md:relative w-full md:w-auto font-medium  md:p-4 ease-in-out duration-300 ${isOpen ? 'left-0' : '-right-full'}`}>
        <i onClick={closeNav} className="fa-solid fa-x  text-xl text-[#DA6217] p-4 md:hidden"></i>
        <li className="p-2"><Link to="/">Home</Link></li>
        <li className="p-2"><Link to="/Rent">Rent</Link></li>
        <li className="p-2"><Link to="/Buy">Buy</Link></li>
        <li className="p-2"><Link to="/messages">Messages</Link></li>
        <li className="p-2"><Link to="/about">About Us</Link></li>
        <li className="p-2"><Link to="/contact">Contact</Link></li>
        {user && user.role === 'Owner' && <li className="p-2"><Link to="/Dashboard">Dashboard</Link></li>}
        {user ? (
          <li className="p-2 h-fit bg-[#364BDC] text-white rounded-lg" onClick={handleLogout}>
            <Link to="#">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-logout" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z"></path>
                <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                <path d="M7 12h14l-3 -3m0 6l3 -3"></path>
              </svg>
            </Link>
          </li>
        ) : (
          <li className="p-2 h-fit bg-[#364BDC] text-white rounded-lg"><Link to="/login">Get Started</Link></li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;