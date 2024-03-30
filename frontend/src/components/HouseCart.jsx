import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const HouseCard = ({ house }) => {
	const navigate = useNavigate();
	const getDetail = (house) => {
		navigate("/detail", { state: { house: house } });
	};
	return (
		<div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg">
			<img
				className="w-full h-48 object-cover"
				src={house.Home_pic}
				alt={house.Type}
			/>
			<div className="p-4">
				<h3 className="text-lg font-semibold text-gray-800 mb-2">
					{house.Type}
				</h3>
				<p className="text-gray-600 mb-2 flex items-center">
					<i className="fas fa-map-marker-alt text-indigo-600 mr-2"></i>
					{house.Location}
				</p>
				<div className="flex items-center justify-between mb-2">
					<p className="text-xl font-bold text-indigo-600">
						<span className="text-sm font-normal">$</span>
						{house.Price}
					</p>
					<button
						onClick={() => getDetail(house)}
						className="text-white bg-indigo-600 hover:bg-indigo-700 rounded-md px-4 py-2 transition-colors duration-300"
					>
						View Details
					</button>
				</div>
				<p className="text-gray-500 text-sm">{house.Description}</p>
			</div>
		</div>
	);
	
};

export default HouseCard;