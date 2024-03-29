import React from 'react';
import bg from "../assets/bg-1.jpg";
import HelloWorld from '../components/HelloWord';
import Footer from '../components/footer';
const About = () => {
  return (
	<div>
	<HelloWorld/>
		 <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img src={bg} alt="About" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-bold text-indigo-700 mb-6">About Our Company</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At our company, we are passionate about providing exceptional real estate services to our clients. With years of experience and a deep understanding of the local market, we strive to make the process of buying, selling, or renting a property as seamless and stress-free as possible.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our team of dedicated professionals is committed to delivering personalized attention and tailored solutions to meet your unique needs. We believe in transparency, integrity, and building long-lasting relationships with our clients, ensuring that you feel supported every step of the way.
            </p>
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 rounded-full p-3 mr-6">
                <i className="fas fa-building text-indigo-700 text-2xl"></i>
              </div>
              <div>
                <h4 className="text-xl text-indigo-700 font-bold mb-2">Experienced Professionals</h4>
                <p className="text-gray-600">
                  Our team consists of knowledgeable and experienced real estate professionals who are dedicated to providing exceptional service.
                </p>
              </div>
            </div>
            <div className="flex items-center mb-8">
              <div className="bg-indigo-100 rounded-full p-3 mr-6">
                <i className="fas fa-handshake text-indigo-700 text-2xl"></i>
              </div>
              <div>
                <h4 className="text-xl text-indigo-700 font-bold mb-2">Personalized Service</h4>
                <p className="text-gray-600">
                  We take the time to understand your unique needs and provide tailored solutions to ensure your satisfaction.
                </p>
              </div>
            </div>
            <a
              href="#"
              className="inline-block bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-md hover:bg-indigo-800 transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
	<Footer/>
	</div>
   
  );
};

export default About;