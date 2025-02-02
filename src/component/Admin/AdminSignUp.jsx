import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import AdminsignupVideo from './AdminsignupVideo';

const AdminSignUp = () => {
  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addAdmin = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!admin) {
      console.error("Admin data is required");
      return;
    }

    axios.post("http://localhost:3000/admins", admin)
      .then((res) => {
        console.log(res);
        toast.success("User  registered");


         // Clear the form data after successful submission
         setAdmin({
          username: "",
          email: "",
          password: "",
          phone: "",
        });
        
      })
      .catch((err) => {
        console.error(err); // Log the error for debugging
        toast.error("User  not registered");
        
      });
  };

  return (
    <section>
      <AdminsignupVideo/>
      <div className='flex justify-center mt-[3.9rem] mr-[1rem] ml-[3rem]'>
      <div className="max-w-sm bg-gradient-to-b from-white to-gray-200 rounded-2xl p-6 border-5 border-white shadow-lg mx-5 my-5 grid grid-cols-1   ">
        <div className="text-center font-bold text-3xl text-blue-600">Admin Sign Up</div>
        <form className="m-4 ">
          <input
            placeholder="User Name"
            name="username"
            type="text"
            value={admin.username}
            onChange={handleInputChange}
            className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500"
            required
            autoComplete="username"
          />
          <input
            placeholder="E-mail"
            name="email"
            type="email"
            value={admin.email}
            onChange={handleInputChange}
            className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500"
            required
            autoComplete="email"
          />
          <input
            placeholder="Phone"
            name="phone"
            type="tel"
            value={admin.phone}
            onChange={handleInputChange}
            className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500"
            required
            autoComplete='tel'
          />
          <input
            placeholder="Password"
            name="password"
            type="password"
            value={admin.password}
            onChange={handleInputChange}
            className="w-full bg-white border-none p-4 rounded-full mt-4 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500"
            required
            autoComplete='new-password'
          />
          <button
            type="button" // Change to type="button"
            onClick={addAdmin}
            className="w-full font-bold bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 mt-5 rounded-full shadow-md transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
          >
            SUBMIT
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>

    </section>
    
  );
}

export default AdminSignUp;