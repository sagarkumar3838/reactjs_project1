import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Outlet } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { motion } from 'framer-motion';

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        // Fetch booked tickets from the JSON server
        axios.get("http://localhost:3000/bookings")
            .then((res) => {
                setBookings(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const deleteBooking = (id) => {
        // Delete booking from the JSON server
        axios.delete(`http://localhost:3000/bookings/${id}`)
            .then(() => {
                setBookings(bookings.filter(booking => booking.id !== id)); // Update state to remove deleted booking
                toast.success("Booking deleted successfully!");
            })
            .catch((err) => {
                console.error(err);
                toast.error("Error deleting booking. Please try again.");
            });
    };

    const editBooking = (booking) => {
        // Navigate to the edit page with the booking data
        navigate(`/userhomepage/editbooking/${booking.id}`, { state: booking });
    };

    return (
        <div className="mt-24 text-black mb-8">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6 ">Booked Tickets</h2>
            {bookings.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {bookings.map((booking, index) => (
                        <motion.div
                            key={index}
                            className="border p-4 rounded-lg shadow-lg bg-white transition-transform duration-300"
                            whileHover={{ scale: 1.05 }} // Scale up on hover
                        >
                            <img src={booking.thumbnail} alt={booking.busNumber} className="w-full h-32 object-cover mb-2 rounded" />
                            <h3 className="font-semibold">{booking.busNumber}</h3>
                            <p>Seats: {booking.seats}</p>
                            <p>Departure: {booking.departure}</p>
                            <p>Arrival: {booking.arrival}</p>
                            <p>Booking Dates: {booking.dates}</p>
                            <div className="flex justify-between mt-2">
                                <button
                                    onClick={() => editBooking(booking)}
                                    className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition duration-200"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => deleteBooking(booking.id)}
                                    className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition duration-200"
                                >
                                    Delete
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            ) : (
                <p>No tickets booked yet.</p>
            )}
            <Outlet />
            <ToastContainer />
        </div>
    );
};

export default Bookings;