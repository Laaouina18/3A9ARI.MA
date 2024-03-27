import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getHouses, deleteHouse, clear } from '../redux/actions/Actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { Link } from 'react-router-dom';

const OwnerDashboard = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getHouses());
        dispatch(clear());
        localStorage.clear();
    }, []);
    const houses = useSelector((state) => state.Houses);

    const getDetail = (house) => {
        navigate("/detail", { state: { house: house } });
    };

    const handleUpdate = (house) => {
        navigate("/add-house", { state: { house: house, update: true } });
    };

    const handleAdd = () => {
        navigate("/add-house", { state: { update: false } });
    };

    const handleDelete = (id) => {
        const confirmation = window.confirm("Voulez-vous vraiment supprimer cette maison ?");
        if (confirmation) {
            dispatch(deleteHouse(id));
            alert("La maison a été supprimée avec succès.");
        }
    };

    return (
        <div className="w-full h-screen">
            <div className="flex h-full">
                <DashboardLayout />
                <div className='w-full p-6 overflow-y-auto'>
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleAdd}
                            className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition-colors duration-300"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-square-rounded-plus mr-2" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M9 12h6"></path>
                                <path d="M12 9v6"></path>
                                <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                            </svg>
                            <span>Add New</span>
                        </button>
                    </div>
                    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                        <table className="w-full text-sm text-left text-gray-500">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        House Owner
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Location
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Contract Type
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {houses.map((house) => (
                                    <tr key={house._id} className="bg-white border-b hover:bg-gray-50 transition-colors duration-300">
                                        <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                                            {house.Owner?.firstName + " " + house.Owner?.lastName}
                                        </td>
                                        <td className="px-6 py-4">
                                            {house.Location}
                                        </td>
                                        <td className="px-6 py-4">
                                            {house.Price} DH
                                        </td>
                                        <td className="px-6 py-4">
                                            {house.Type}
                                        </td>
                                        <td className="px-6 py-4">
                                            <p>{house.accepted === 0 ?
                                                <span className="px-2 py-1 rounded-full bg-yellow-200 text-yellow-800">Pending</span>
                                                :
                                                <span className="px-2 py-1 rounded-full bg-green-200 text-green-800">Accepted</span>
                                            }</p>
                                        </td>
                                        <td className="px-6 py-4 flex space-x-4">
                                            <button
                                                onClick={() => handleUpdate(house)}
                                                className="text-blue-500 hover:text-blue-700 transition-colors duration-300"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-edit" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1"></path>
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z"></path>
                                                    <path d="M16 5l3 3"></path>
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => handleDelete(house._id)}
                                                className="text-red-500 hover:text-red-700 transition-colors duration-300"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-trash" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path d="M4 7l16 0"></path>
                                                    <path d="M10 11l0 6"></path>
                                                    <path d="M14 11l0 6"></path>
                                                    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
                                                    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
                                                </svg>
                                            </button>
                                            <button
                                                onClick={() => getDetail(house)}
                                                className="text-gray-500 hover:text-gray-700 transition-colors duration-300"
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnerDashboard;