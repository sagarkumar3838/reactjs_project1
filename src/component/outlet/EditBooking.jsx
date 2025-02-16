import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const EditBooking = () => {
    const location = useLocation();
    const booking = location.state; // Access the passed booking data

    const [formData, setFormData] = useState({
        busNumber: booking.busNumber,
        seats: booking.seats,
        departure: booking.departure,
        arrival: booking.arrival,
        dates: booking.dates,
        thumbnail: booking.thumbnail,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update the booking on the server
        axios.put(`http://localhost:3000/bookings/${booking.id}`, formData)
            .then(() => {
                toast.success("Booking updated successfully!");
            })
            .catch((err) => {
                console.error(err);
                toast.error("Error updating booking. Please try again.");
            });
    };

    return (
        <div className="mt-[8rem] mb-4 w-[35rem]  mx-auto p-8 bg-gradient-to-b from-white to-gray-200 rounded-3xl border-4 border-white shadow-lg">
            <h2 className="text-3xl font-extrabold text-center text-blue-600 mb-6">Edit Booking</h2>
            <form onSubmit={handleSubmit} className="space-y-4  text-black">
                <div className='flex gap-14 text-center'>
                <div>
                    <label className="block text-gray-700 font-semibold">Bus Number:</label>
                    <input
                        type="text"
                        name="busNumber"
                        value={formData.busNumber}
                        onChange={handleChange}
                        className="mt-1 block w-full p-4 border-0 rounded-full bg-white shadow-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Seats:</label>
                    <input
                        type="number"
                        name="seats"
                        value={formData.seats}
                        onChange={handleChange}
                        className="mt-1 block w-full p-4 border-0 rounded-full bg-white shadow-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                </div>
             <div className='flex gap-12 text-center'>
             <div>
                    <label className="block text-gray- 700 font-semibold">Departure:</label>
                    <input
                        type="text"
                        name="departure"
                        value={formData.departure}
                        onChange={handleChange}
                        className="mt-1 block w-full p-4 border-0 rounded-full bg-white shadow-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Arrival:</label>
                    <input
                        type="text"
                        name="arrival"
                        value={formData.arrival}
                        onChange={handleChange}
                        className="mt-1 block w-full p-4 border-0 rounded-full bg-white shadow-md focus:outline-none focus:border-blue-400"
                    />
                </div>
             </div>
                <div>
                    <label className="block text-gray-700 font-semibold">Booking Dates:</label>
                    <input
                        type="text"
                        name="dates"
                        value={formData.dates}
                        onChange={handleChange}
                        className="mt-1 block w-full p-4 border-0 rounded-full bg-white shadow-md focus:outline-none focus:border-blue-400"
                    />
                </div>
                <button
                    type="submit"
                    className="block w-full font-bold bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 active:scale-95"
                >
                    Update Booking
                </button>
            </form>
            <Outlet />
        </div>
    );
};

export default EditBooking;