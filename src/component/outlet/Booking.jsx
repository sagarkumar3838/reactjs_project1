import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';
import { toast } from 'react-toastify';
import { Outlet } from 'react-router-dom';
import { motion } from 'framer-motion';

const Booking = () => {
    const [busList, setBusList] = useState([]);
    const navigate = useNavigate(); // Initialize the navigate function

    useEffect(() => {
        // Fetch bus data from the JSON server
        axios.get("http://localhost:3000/bus")
            .then((res) => {
                setBusList(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    const bookTicket = (bus) => {
        // Prepare booking data
        const bookingData = {
            busNumber: bus.busNumber,
            seats: bus.seats,
            departure: bus.departure,
            arrival: bus.arrival,
            dates: bus.dates,
            thumbnail: bus.thumbnail,
        };

        // Send booking data to the JSON server
        axios.post("http://localhost:3000/bookings", bookingData)
            .then((res) => {
                toast.success("Ticket booked successfully!");
                navigate('/userhomepage/my-bookings'); // Navigate to the My Bookings page
            })
            .catch((err) => {
                console.error(err);
                toast.error("Error booking ticket. Please try again.");
            });
    };

    return (
        <div className="container mx-auto bg-black p-6">
            <h2 className="text-4xl font-bold text-center text-white mb-6 mt-24">Available Buses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {busList.map((bus) => (
                    <motion.div
                        key={bus.id}
                        className="border p-4 rounded shadow text-white transition-transform duration-300"
                        whileHover={{ scale: 1.05 }} // Scale up on hover
                    >
                        <img src={bus.thumbnail} alt={bus.busNumber} className="w-full h-32 object-cover mb-2" />
                        <h3 className="font-semibold">{bus.busNumber}</h3>
                        <p>Departure: {bus.departure}</p>
                        <p>Arrival: {bus.arrival}</p>
                        <p>Seats Available: {bus.seats}</p>
                        <button
                            onClick={() => bookTicket(bus)}
                            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-200"
                        >
                            Book Ticket
                        </button>
                    </motion.div>
                ))}
            </div>
            <Outlet />
        </div>
    );
};

export default Booking;