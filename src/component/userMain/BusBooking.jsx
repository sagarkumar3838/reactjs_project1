import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BusBooking = () => {
    const [buses, setBuses] = useState([]);
    const [selectedBus, setSelectedBus] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);

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
        setSelectedSeats([]); // Reset selected seats when a new bus is selected
    };

    const handleSeatSelect = (seat) => {
        setSelectedSeats((prev) => {
            if (prev.includes(seat)) {
                return prev.filter((s) => s !== seat); // Deselect seat
            }
            return [...prev, seat]; // Select seat
        });
    };

    const handleBooking = async () => {
        const bookingData = {
            busId: selectedBus.busid,
            busNumber: selectedBus.busNumber,
            seats: selectedSeats,
        };

        try {
            await axios.post('http://localhost:3000/bookings', bookingData);
            toast.success('Booking confirmed!');
            setSelectedBus(null); // Reset selection after booking
            setSelectedSeats([]);
        } catch (error) {
            console.error('Error booking ticket:', error);
            toast.error('Failed to book the ticket.');
        }
    };

    return (
        <div className="p-6">
            <ToastContainer />
            <h1 className="text-2xl font-bold mb-4">Bus Booking System</h1>
            {!selectedBus ? (
                <div>
                    <h2 className="text-xl font-semibold mb-4">Select a Bus</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        {buses.map((bus) => (
                            <div className="bg-white shadow-md rounded-lg p-4" key={bus.id}>
                                <img src={bus.thumbnail} alt={bus.busNumber} className="w-full h-32 object-cover rounded-md mb-2" />
                                <h3 className="text-lg font-semibold">{bus.busNumber}</h3>
                                <p className="text-gray-600">Seats Available: {bus.seats}</p>
                                <button
                                    onClick={() => handleBusSelect(bus)}
                                    className="mt-2 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
                                >
                                    Select Bus
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Selected Bus: {selectedBus.busNumber}</h2>
                    <img src={selectedBus.thumbnail} alt={selectedBus.busNumber} className="w-full h-32 object-cover rounded-md mb-2" />
                    <h3 className="text-lg font-semibold">Select Seats</h3>
                    <div className="flex flex-wrap mt-2">
                        {Array.from({ length: selectedBus.seats }, (_, index) => (
                            <button
                                key={index + 1}
                                onClick={() => handleSeatSelect(index + 1)}
                                className={`m-1 py-2 px-4 rounded transition ${
                                    selectedSeats.includes(index + 1) ? 'bg-green-500 text-white' : 'bg-gray-300'
                                }`}
                            >
                                {index + 1}
                            </button>
                        ))}
                    </div>
                    <h3 className="mt-4">Selected Seats: {selectedSeats.join(', ')}</h3>
                    <button
                        onClick={handleBooking}
                        disabled={selectedSeats.length === 0}
                        className={`mt-4 py-2 px-4 rounded transition ${
                            selectedSeats.length === 0 ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-600'
                        }`}
                    >
                        Confirm Booking
                    </button>
                </div>
            )}
        </div>
    );
};

export default BusBooking;