import React from 'react';

const BookingConfirmation = ({ bus, seats, onConfirm }) => {
    return (
        <div>
            <h2>Booking Confirmation</h2>
            <p>Bus Number: {bus}</p>
            <p>Seats to Book: {seats}</p>
            <button onClick={onConfirm}>Confirm Booking</button>
        </div>
    );
};

export default BookingConfirmation;