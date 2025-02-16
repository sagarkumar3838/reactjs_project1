import React, { useEffect, useState } from 'react';

import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios'; // Make sure to import axios
import AddBusVideo from '../Admin/AddBusVideo';
import { Link, Links, useParams } from 'react-router-dom';

const EditBus = () => {
  const [bus, setBus] = useState({
    busid: "",
    busNumber: "",
    departure: "",
    arrival: "",
    seats: "",
    thumbnail: "",
    dates: ""
  });



  const editBus = (e) => {
    const { name, value } = e.target;
    setBus((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  let payload = bus;

  let param = useParams()
  console.log(param.id);

  useEffect(()=>{
    axios.get(`http://localhost:3000/bus/${param.id}`)
    .then((res) => {
      console.log(res.data);
  
      // Clear the form data after successful submission
      setBus({
        busid: res.data.busid,
        busNumber: res.data.busNumber,
        departure: res.data.departure,
        arrival: res.data.arrival,
        seats: res.data.seats,
        thumbnail: res.data.thumbnail,
        dates: res.data.dates,
      });
    })
    .catch((err) => {
      console.error(err); // Log the error for debugging
     
    });
  },[])

  const SubmitBusInfo = (e) => {
    e.preventDefault(); // Prevent default form submission
   

    axios.put(`http://localhost:3000/bus/${param.id}`, payload)
      .then((res) => {
        console.log(res);
        toast.success("Edited Ticket Successfully!");

        
      })
      .catch((err) => {
        console.error(err); // Log the error for debugging
        toast.error("Not Edited Bus Details");
      });
  };

  return (
    <section className=''>
      <AddBusVideo />
      <div className='flex justify-end mt-14  md:mx-0 '>
        <div className="  max-w-4xl bg-gradient-to-b from-white to-gray-200 rounded-2xl p-3 border-5 border-white shadow-lg mx-5 my-5 grid grid-cols-1 ">
         
          <div className="flex flex-col ">
            <div className="text-center font-bold text-3xl text-blue-600">Bus Booking</div>
            <form className="m-4 text-center" onSubmit={SubmitBusInfo}>
              <div className='flex gap-3'>
                <div className="flex flex-col w-full">
                  <label htmlFor="busid" className="text-gray-700 text-center">BUS_ID</label>
                  <input
                    id="busid"
                    name="busid"
                    type="text"
                    value={bus.busid}
                    onChange={editBus}
                    className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500 mb-2"
                    required
                    autoComplete="Busid"
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="busNumber" className="text-gray-700">Bus Number</label>
                  <input
                    id="busNumber"
                    name="busNumber"
                    type="text"
                    value={bus.busNumber}
                    onChange={editBus}
                    className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500"
                    required
                    autoComplete="busNumber"
                  />
                </div>
              </div>
              <div className='flex gap-3'>
                <div className="flex flex-col w-full">
                  <label htmlFor="departure" className="text-gray-700">Departure</label>
                  <input
                    id="departure"
                    name="departure"
                    type="datetime-local"
                    value={bus.departure}
                    onChange={editBus}
                    className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500 mb-2"
                    required
                    autoComplete='departure'
                  />
                </div>
                <div className="flex flex-col w-full">
                  <label htmlFor="arrival" className="text-gray-700">Arrival</label>
                  <input
                    id="arrival"
                    name="arrival"
                    type="datetime-local"
                    value={bus.arrival}
                    onChange={editBus}
                    className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500 mb- 2"
                    required
                    autoComplete='arrival'
                  />
                </div>
              </div>
               <div className='flex gap-3'>
               <div className="flex flex-col w-full">
                <label htmlFor="seats" className="text-gray-700">Seats</label>
                <input
                  id="seats"
                  name="seats"
                  type="number"
                  value={bus.seats}
                  onChange={editBus}
                  className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500 mb-2"
                  required
                  autoComplete='seats'
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="dates" className="text-gray-700">Booking Dates</label>
                <input
                  id="dates"
                  name="dates"
                  type="date"
                  value={bus.dates}
                  onChange={editBus}
                  className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500 mb-2"
                  required
                  autoComplete='dates'
                />
              </div>
               </div>
              <div className="flex flex-col w-full">
                <label htmlFor="thumbnail" className="text-gray-700">Bus Image</label>
                <input
                  id="thumbnail"
                  name="thumbnail"
                  type="url"
                  value={bus.thumbnail}
                  onChange={editBus}
                  className="w-full bg-white border-none p-4 rounded-full mt-1 shadow-md border-2 border-transparent focus:outline-none focus:border-teal-500 mb-2"
                  required
                  autoComplete='thumbnail'
                />
              </div>
              <button
                type="button"
                onClick={SubmitBusInfo}
                
                className="w-full md:w-[15rem] font-bold bg-gradient-to-r from-blue-600 to-teal-500 text-white py-4 mt-5 rounded-md shadow-md transition-transform duration-200 ease-in-out hover:scale-105 active:scale-95"
              >
                SUBMIT
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditBus;