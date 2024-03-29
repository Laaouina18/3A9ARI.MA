import React from "react";
const Footer = () => {

	return (
		<div>
			
			<footer className="bg-gray-800 py-12">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">About Us</h4>
        <p className="text-gray-400 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim.
        </p>
        <div className="flex space-x-4">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-twitter fa-lg"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
        <ul className="text-gray-400">
          <li className="mb-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              About
            </a>
          </li>
          <li className="mb-2">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Properties
            </a>
          </li>
          <li>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">
          Contact Information
        </h4>
        <ul className="text-gray-400">
          <li className="mb-2 flex items-center">
            <i className="fas fa-map-marker-alt mr-2"></i>
            123 Main Street, City, State
          </li>
          <li className="mb-2 flex items-center">
            <i className="fas fa-phone mr-2"></i>
            (123) 456-7890
          </li>
          <li className="flex items-center">
            <i className="fas fa-envelope mr-2"></i>
            info@example.com
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-white mb-4">Newsletter</h4>
        <p className="text-gray-400 mb-4">
          Subscribe to our newsletter to receive updates and special offers.
        </p>
        <div className="flex">
          <input
            type="email"
            placeholder="Your email address"
            className="bg-gray-700 text-white py-2 px-4 rounded-l-lg focus:outline-none"
          />
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-r-lg hover:bg-indigo-700 transition-colors duration-300">
            Subscribe
          </button>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t border-gray-700 pt-8">
      <p className="text-gray-400 text-center">
        &copy; 2023 Your Company. All rights reserved.
      </p>
    </div>
  </div>
</footer>
		</div>
	);
}
export default Footer;