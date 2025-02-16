import React from 'react';

const DataTable = ({ data }) => {
    return (
        <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Submitted Searches</h2>
            <table className="min-w-full border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 p-2">From</th>
                        <th className="border border-gray-300 p-2">Destination</th>
                        <th className="border border-gray-300 p-2">Check In</th>
                        <th className="border border-gray-300 p-2">Check Out</th>
                        <th className="border border-gray-300 p-2">Adults</th>
                        <th className="border border-gray-300 p-2">Children</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-100">
                            <td className="border border-gray-300 p-2">{item.from}</td>
                            <td className="border border-gray-300 p-2">{item.destination}</td>
                            <td className="border border-gray-300 p-2">{item.checkIn}</td>
                            <td className="border border-gray-300 p-2">{item.checkOut}</td>
                            <td className="border border-gray-300 p-2">{item.adults}</td>
                            <td className="border border-gray-300 p-2">{item.children}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;