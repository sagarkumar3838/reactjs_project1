import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Header from './Header';
import Footer from './Footer';
// Make sure to import Footer if it's in a different file

// const TicketLink = () => {
//     const navigate = useNavigate();

//     const handleCommand = () => {
//         toast.success('Go for Ticket Booking');
//         navigate('/userhomepage/ticket'); // Redirect to the DataTable component
//     };

//     return (
//         <div onClick={handleCommand} className="cursor-pointer">
//             <img alt="ticket" src="/assets/images/ticket3.jpg" width="75%" className='rounded-lg' />
//             <span>Ticket</span>
//         </div>
//     );
// };

const UserHomePage = () => {
    return (
        <div className='bg-transparent text-white'>
            <Header/>
            {/* <TicketLink /> Add the TicketLink component here */}
            <Outlet /> {/* This will render the child routes */}
            <Footer/>
        </div>
    );
};

export default UserHomePage;