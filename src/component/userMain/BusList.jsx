import React from 'react';

const BusList = ({ buses, onBusSelect }) => {
    return (
        <div>
            <h2>Select a Bus</h2>
            <ul>
                {buses.map((bus) => (
                    <li key={bus.id}>
                        <div>
                            <img src={bus.thumbnail} alt={bus.busNumber} width="100" />
                            <h3>{bus.busNumber}</h3>
                            <p>Seats Available: {bus.seats}</p>
                            <button onClick={() => onBusSelect(bus)}>
                                Select Bus
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BusList;