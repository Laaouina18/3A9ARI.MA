// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {Signin } from '../redux/actions/Actions';

const RegisterForm = () => {
const [user,setUser] = useState({firstName:"",lastName:"",email:"",password:"",phone:"",role:""})
const [errorName, setErrorName] = useState('');
const [errorEmail, setErrorEmail] = useState('');
const [errorPassword, setErrorPassword] = useState('');
const [errorPhone, setErrorPhone] = useState('');
const [errorRole, setErrorRole] = useState('');
const [errorAvatar, setErrorAvatar] = useState('');
const [passwordConfirmation, setPasswordConfirmation] = useState('');
const dispatch = useDispatch();
const navigate = useNavigate();
const handleSubmit = async (e) => {
e.preventDefault();
setErrorName('');
setErrorEmail('');
setErrorPassword('');
setErrorPhone('');
setErrorRole('');
setErrorAvatar('');
if (!user.firstName) {
setErrorName('First Name is required');
return;
}
if (!user.email) {
setErrorEmail('Email is required');
return;
}
if (!user.password) {
setErrorPassword('Password is required');
return;
}
if (!user.phone) {
setErrorPhone('Phone is required');
return;
}
if (!user.role) {
setErrorRole('Role is required');
return;
}
if (user.password !== passwordConfirmation) {
setErrorPassword('Passwords do not match');
return;
}
dispatch(Signin(user));
setUser({firstName:"",lastName:"",email:"",password:"",phone:"",role:""});
alert("User Registered Successfully")
navigate("/login")
}



  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Register</h1>
          <p className="text-gray-600">Create your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              FirstName
            </label>
            <input
              type="text"
              id="name"
              value={user.firstName}
              onChange={(e) => setUser({...user,firstName:e.target.value})}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorName ? 'border-red-500' : ''
              }`}
              required
            />
            {errorName && <p className="text-red-500 text-sm mt-1">{errorName}</p>}
          </div>
		  <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              LastName
            </label>
            <input
              type="text"
              id="name"
			  name="lastName"
              value={user.lastName}
              onChange={(e) => setUser({...user,lastName:e.target.value})}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorName ? 'border-red-500' : ''
              }`}
              required
            />
            {errorName && <p className="text-red-500 text-sm mt-1">{errorName}</p>}
          </div>
		  <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              id="name"
              value={user.phone}
              onChange={(e) => setUser({...user,phone:e.target.value})}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorPhone? 'border-red-500' : ''
              }`}
              required
            />
            {errorName && <p className="text-red-500 text-sm mt-1">{errorName}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={user.email}
              onChange={(e) => setUser({...user,email:e.target.value})}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorEmail ? 'border-red-500' : ''
              }`}
              required
            />
            {errorEmail && <p className="text-red-500 text-sm mt-1">{errorEmail}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-bold mb-2">
              Role
            </label>
            <select
              id="role"
              value={user.role}
              onChange={(e) => setUser({...user,role:e.target.value})}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorRole ? 'border-red-500' : ''
              }`}
            >
              <option value="Client">Client</option>
              <option value="Owner">Owner</option>
            </select>
            {errorRole && <p className="text-red-500 text-sm mt-1">{errorRole}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              onChange={(e) => setUser({...user,password:e.target.value})}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorPassword ? 'border-red-500' : ''
              }`}
              required
            />
            {errorPassword && <p className="text-red-500 text-sm mt-1">{errorPassword}</p>}
          </div>
          <div className="mb-6">
            <label htmlFor="passwordConfirmation" className="block text-gray-700 font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              value={passwordConfirmation}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Register
            </button>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
              Already have an account?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;