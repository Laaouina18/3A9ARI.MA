import React from 'react';
import HelloWorld from '../components/HelloWord';
import Footer from '../components/Footer';
const Contact = () => {
  return (
	<div>
		<HelloWorld/>
    <div className="bg-white py-16">
	
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-indigo-700 mb-8 text-center">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h3>
            <p className="text-gray-600 mb-8">
              Have a question or need assistance? Feel free to reach out to us using the contact form, and we'll get back to you as soon as possible.
            </p>
            <form>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none focus:bg-white"
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none focus:bg-white"
                />
              </div>
              <div className="mb-4">
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full bg-gray-200 p-3 rounded-lg focus:outline-none focus:bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-800 transition-colors duration-300"
              >
                Submit
              </button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Contact Information</h3>
            <ul className="text-gray-600">
              <li className="mb-4 flex items-center">
                <i className="fas fa-map-marker-alt text-indigo-700 mr-4"></i>
                123 Main Street, City, State
              </li>
              <li className="mb-4 flex items-center">
                <i className="fas fa-phone text-indigo-700 mr-4"></i>
                (123) 456-7890
              </li>
              <li className="mb-4 flex items-center">
                <i className="fas fa-envelope text-indigo-700 mr-4"></i>
                info@example.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
	<Footer/>
	</div>
	
  );
};

export default Contact;