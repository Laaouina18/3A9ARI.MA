// DashboardLayout.jsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const DashboardLayout = () => {
    const toggleSidebar = () => {
        const sideElements = document.querySelectorAll('.side');
        const sideBarElements = document.querySelectorAll('.sideBar');
        const imageElements = document.querySelectorAll('.image');

        imageElements[0].classList.toggle('w-8');
        imageElements[0].classList.toggle('h-8');

        if (sideBarElements[0].classList.contains('w-[60px]')) {
            sideBarElements[0].classList.replace('max-sm:ml-[-58px]', 'max-sm:ml-0');
            sideBarElements[0].classList.replace('w-[60px]', 'w-60');
        } else {
            sideBarElements[0].classList.replace('w-60', 'w-[60px]');
            sideBarElements[0].classList.replace('max-sm:ml-0', 'max-sm:ml-[-58px]');
        }

        for (let i in sideElements) {
            if (sideElements[i].classList) {
                sideElements[i].classList.toggle('hidden');
            }
        }
    };
    const user = {
        id: 1,
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://via.placeholder.com/150",
        role: "admin"
    };

    return (
        <div className="flex h-screen">
            <div className="sideBar transition-all duration-300 max-sm:ml-[-58px] ease-linear w-[60px] flex flex-col h-full p-2 top-0 bg-[#E2E6F3] px-2 border-r border-gray-700 relative">
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <h4 className="side hidden mx-2 my-6 font-medium text-lg text-[#364BDC]">Dashboard</h4>
                    <img src={user.avatar} className="image object-cover w-24 h-24 mx-2 rounded-full h-8 w-8 transition-all duration-300" alt="Avatar" />
                    <h4 className="side hidden mx-2 mt-2 font-medium text-[#DA6217]">{user.name}</h4>
                </div>
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <div>
                        <NavLink to="/Dashboard" className="flex cursor-pointer items-center px-2 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-[#616571] hover:bg-gray-100 hover:bg-gray-800 hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-warehouse" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                <path d="M3 21v-13l9 -4l9 4v13" />
                                <path d="M13 13h4v8h-10v-6h6" />
                                <path d="M13 21v-9a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v3" />
                            </svg>
                            <span className="side hidden mx-4 font-medium">Your Houses</span>
                        </NavLink>
                        <NavLink to="/Buy" className="flex cursor-pointer items-center px-2 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-[#616571] hover:bg-gray-100 hover:bg-gray-800 hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                                <path d="M10 12h4v4h-4z" />
                            </svg>
                            <span className="side hidden mx-4 font-medium">Buy</span>
                        </NavLink>
                        <NavLink to="/Rent" className="flex cursor-pointer items-center px-2 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-[#616571] hover:bg-gray-100 hover:bg-gray-800 hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-building-store" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 22h8" />
                                <path d="M21 3l-9 9h9v8h-9l9 9" />
                                <path d="M3 3l9 9h-9v8h9l-9 9" />
                            </svg>
                            <span className="side hidden mx-4 font-medium">Rent</span>
                        </NavLink>
                        <NavLink to="/Home" className="flex cursor-pointer items-center px-2 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-[#616571] hover:bg-gray-100 hover:bg-gray-800 hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-home" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 12l-5 0l9 -9l9 9l-5 0" />
                                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            </svg>
                            <span className="side hidden mx-4 font-medium">Home</span>
                        </NavLink>
                        <NavLink to="/Messages" className="flex cursor-pointer items-center px-2 py-2 mt-5 transition-colors duration-300 transform rounded-lg text-[#616571] hover:bg-gray-100 hover:bg-gray-800 hover:text-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-message-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 20l-3 -3h-2a3 3 0 0 1 -3 -3v-6a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-2l-3 3" />
                                <path d="M8 9h8" />
                                <path d="M8 13h6" />
                            </svg>
                            <span className="side hidden mx-4 font-medium">Messages</span>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="w-full h-full overflow-y-auto ml-2">
                <div onClick={toggleSidebar} className="p-2 w-fit cursor-pointer bg-[#E2E6F3] rounded-lg m-4 text-[#616571] transition-colors duration-300 hover:bg-gray-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-menu-2" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 6l16 0" />
                        <path d="M4 12l16 0" />
                        <path d="M4 18l16 0" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;