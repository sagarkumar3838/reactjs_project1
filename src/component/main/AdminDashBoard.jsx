import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Button1 from './Button1';
import Button2 from './Button2';
import { toast } from 'react-toastify';

const AdminDashBoard = () => {
  const [buslist, setBuslist] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3000/bus")
      .then((res) => {
        console.log(res.data);
        setBuslist(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const removeBus = (id) => {
    axios.delete(`http://localhost:3000/bus/${id}`)
      .then((res) => {
        console.log(res.data);
        toast.success("Bus removed successfully");
        // Optionally, refresh the bus list after deletion
        setBuslist(buslist.filter(bus => bus.id !== id));
      })
      .catch((err) => {
        console.log(err);
        toast.error("Bus not found");
      });
  };

  const moveToEdit = (id) => {
    navigate(`/adminhomepage/editbus/${id}`);
  };

  return (
    <div>
      <div className="shadow-md min-w-6xl overflow-hidden ml-[14.1rem] mt-[7rem]">
        <div className=" max-h-screen">
          <table className="min-w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="fixed mt-[4rem] bg-gray-50 dark:bg-gray-700 text-xs text-gray-700 uppercase dark:text-gray-400  top-0 z-30">
              <tr>
                <th scope="col" className="px-6 py-3">Bus Image</th>
                <th scope="col" className="px-6 py-3">Bus Number</th>
                <th scope="col" className="px-6 py-3">Departure</th>
                <th scope="col" className="px-6 py-3">Arrival</th>
                <th scope="col" className="px-6 py-3">Seats</th>
                <th scope="col" className="px-6 py-3">Booking Dates</th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                <th scope="col" className="px-6 py-3"></th>
                






              </tr>
            </thead>
            <tbody className=''>
              {buslist.map((bus) => (
                <tr key={bus.id} className="mt-[10rem] bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                  <td className="pl-10 ">
                    <img 
                      src={bus.thumbnail} 
                      className="w-16 md:w-32 max-w-full max-h-4xl" 
                      alt="Bus"
                    />
                  </td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{bus.busNumber}</td>
                  <td className="px-6 py-4">{bus.departure}</td>
                  <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">{bus.arrival}</td>
                  <td className="px-6 py-4">{bus.seats}</td>
                  <td className="px-6 py-4">{bus.dates}</td>
                  <td className="px-6 py-4">
                    <Link state={bus} to={`/adminhomepage/viewbus/${bus.id}`}>View Bus</Link>
                  </td>
                  <td className="px-6 py-4">
                    <Button1 onClick={() => moveToEdit(bus.id)} />
                  </td>
                  <td className="px-6 py-4">
                    <Button2 onClick={() => removeBus(bus.id)} />
                  </td>
                  <td className="px-6 py-4">
                    
                  </td>
                  <td className="px-6 py-4">
                    
                    </td>
                    <td className="px-6 py-4">
                    
                    </td>
                    <td className="px-6 py-4">
                    
                    </td>
                    <td className="px-6 py-4">
                    
                    </td>
                  
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;