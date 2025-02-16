
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BusList from './BusList';
import BookingConfirmation from '../outlet/BookingConfirmation';

const UserDashboard = () => {
    const [buses, setBuses] = useState([]);
    const [selectedBus, setSelectedBus] = useState(null);
    const [seatsToBook, setSeatsToBook] = useState(0);

    useEffect(() => {
        const fetchBuses = async () => {
            try {
                const response = await axios.get('http://localhost:3000/bus');
                setBuses(response.data);
            } catch (error) {
                console.error('Error fetching bus data:', error);
                toast.error('Failed to fetch bus data.');
            }
        };

        fetchBuses();
    }, []);

    const handleBusSelect = (bus) => {
        setSelectedBus(bus);
        setSeatsToBook(bus.seats); // Set available seats to book
    };

    const handleBooking = async () => {
        const bookingData = {
            busId: selectedBus.busid,
            busNumber: selectedBus.busNumber,
            seats: seatsToBook,
        };

        try {
            await axios.post('http://localhost:5000/bookings', bookingData);
            toast.success('Booking confirmed!');
            setSelectedBus(null); // Reset selection after booking
            setSeatsToBook(0);
        } catch (error) {
            console.error('Error booking ticket:', error);
            toast.error('Failed to book the ticket.');
        }
    };

    return (
        <div>
            <ToastContainer />
            <h1>Bus Booking System</h1>
            {!selectedBus ? (
                <BusList buses={buses} onBusSelect={handleBusSelect} />
            ) : (
                <BookingConfirmation
                    bus={selectedBus}
                    seats={seatsToBook}
                    onConfirm={handleBooking}
                />
            )}
        </div>
    );
};

export default UserDashboard;