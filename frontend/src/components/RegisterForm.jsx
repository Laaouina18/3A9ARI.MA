// RegisterForm.jsx
import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [role, setRole] = useState('client');
  const [avatar, setAvatar] = useState('');
  const [errorName, setErrorName] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [errorRole, setErrorRole] = useState(false);
  const [errorAvatar, setErrorAvatar] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://127.0.0.1:8000/api/Register', {
        name,
        email,
        role,
        avatar,
        password,
        password_confirmation: passwordConfirmation,
      });
      // Handle successful registration
      alert('Registration successful!');
      // Optionally, you can redirect the user to the login page
      window.location.href = '/login';
    } catch (error) {
      if (error.response) {
        const { data } = error.response;
        if (data.errors.name) {
          setErrorName(data.errors.name[0]);
        }
        if (data.errors.email) {
          setErrorEmail(data.errors.email[0]);
        }
        if (data.errors.role) {
          setErrorRole(data.errors.role[0]);
        }
        if (data.errors.password) {
          setErrorPassword(data.errors.password[0]);
        }
        if (data.errors.avatar) {
          setErrorAvatar(data.errors.avatar[0]);
        }
      }
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'ozbl32lz');
    axios
      .post('https://api.cloudinary.com/v1_1/dssb587ew/upload', formData)
      .then((response) => {
        setAvatar(response.data.secure_url);
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Register</h1>
          <p className="text-gray-600">Create your account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="avatar" className="block text-gray-700 font-bold mb-2">
              Avatar
            </label>
            <input
              type="file"
              id="avatar"
              onChange={handleImageUpload}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorAvatar ? 'border-red-500' : ''
              }`}
              required
            />
            {errorAvatar && <p className="text-red-500 text-sm mt-1">{errorAvatar}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorName ? 'border-red-500' : ''
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className={`appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                errorRole ? 'border-red-500' : ''
              }`}
            >
              <option value="client">Client</option>
              <option value="owner">Owner</option>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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