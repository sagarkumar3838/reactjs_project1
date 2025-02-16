import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({onSubmit}) => {


    const [formData, setFormData] = useState({
        from: '',
        destination: '',
        checkIn: '',
        checkOut: '',
        adults: '01',
        children: '0',
        type: 'AC',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.from) newErrors.from = 'From is required';
        if (!formData.destination) newErrors.destination = 'Destination is required';
        if (!formData.checkIn) newErrors.checkIn = 'Check In date is required';
        if (!formData.checkOut) newErrors.checkOut = 'Check Out date is required';
        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/search', formData);
            console.log('Data submitted successfully:', response.data);
            toast.success('Search submitted successfully!'); // Success notification
            // Optionally reset the form or show a success message
            setFormData({
                from: '',
                destination: '',
                checkIn: '',
                checkOut: '',
                adults: '01',
                children: '0',
                type:" "
            });
            setErrors({});
        } catch (error) {
            console.error('Error submitting data:', error);
            toast.error('Error submitting search. Please try again.'); // Error notification
        }
    };









    return (
        <div className="bg-black py-8 z-0">
            <div className="search">
                <div className="container mx-auto h-full">
                    <div className="flex h-full">
                        <div className="flex-1 h-full ">
                            <div className="z-0 search_tabs_container rounded-full  w-[80%] mt-10 ml-[10%] h-[7rem]">
                                <div className=" uppercase text-3xl flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between">
                                    <div className="search_tab active rounded-l-4xl flex items-center justify-center p-4 text-white bg-orange-500 shadow-md flex-grow hover:bg-green-600 transition duration-200 h-56">
                                        <img src="/assests/images/suitcase.png" alt="" className="mr-2" />
                                        <span>hotels</span>
                                    </div>
                                    <div className="search_tab flex items-center justify-center p-4 text-gray-800 bg-white flex-grow hover:bg-green-600 transition duration-200 h-56">
                                        <img src="/assests/images/bus.png" alt="" className="mr-2" />
                                        <span>car rentals</span>
                                    </div>
                                    <div className="search_tab flex items-center justify-center p-4 text-gray-800 bg-white flex-grow hover:bg-green-600 transition duration-200 h-56">
                                        <img src="/assests/images/departure.png" alt="" className="mr-2" />
                                        <span>flights</span>
                                    </div>
                                    <div className="search_tab flex items-center justify-center p-4 text-gray-800 bg-white flex-grow hover:bg-green-600 transition duration-200 h-56">
                                        <img src="/assests/images/island.png" alt="" className="mr-2" />
                                        <span>trips</span>
                                    </div>
                                    <div className="search_tab flex items-center justify-center p-4 text-gray-800 bg-white flex-grow hover:bg-green-600 transition duration-200 h-56">
                                        <img src="/assests/images/cruise.png" alt="" className="mr-2" />
                                        <span>cruises</span>
                                    </div>
                                    <div className="search_tab flex items-center justify-center p-4 text-gray-800 bg-white flex-grow hover:bg-green-600 transition duration-200 rounded-r-4xl h-56">
                                        <img src="/assests/images/diving.png" alt="" className="mr-2" />
                                        <span>activities</span>
                                    </div>
                                </div>
                            </div>

                            <div className="z-20 relative search_panel active mt-6 w-full h-[7rem] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                            
                            {/* form validation */}
                            <div>
            <ToastContainer />
            <form action="#" id="search_form_1" onSubmit={handleSubmit} className="gap-2 text-center flex flex-col lg:flex-row items-start lg:items-center justify-start lg:justify-between bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-12 shadow-md">
                <div className="search_item lg:mb-0 lg:mr-4">
                    <label className="text-gray-900">From</label>
                    <input
                        type="text"
                        name="from"
                        value={formData.from}
                        onChange={handleChange}
                        className="destination search_input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errors.from && <p className="text-red-500">{errors.from}</p>}
                </div>
                <div className="search_item lg:mb-0 lg:mr-4">
                    <label className="text-gray-900">Destination</label>
                    <input
                        type="text"
                        name="destination"
                        value={formData.destination}
                        onChange={handleChange}
                        className="destination search_input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    {errors.destination && <p className="text-red-500">{errors.destination}</p>}
                </div>
                <div className="search_item mb-4 lg:mb-0 lg:mr-4">
                    <label className="text-gray-900">Check In</label>
                    <input
                        type="datetime-local"
                        name="checkIn"
                        value={formData.checkIn}
                        onChange={handleChange}
                        className="check_in search_input border border-gray-300 rounded p-2 focus:outline-none focus :ring-2 focus:ring-blue-500"
                        placeholder="YYYY-MM-DD"
                        required
                    />
                    {errors.checkIn && <p className="text-red-500">{errors.checkIn}</p>}
                </div>
                <div className="search_item mb-4 lg:mb-0 lg:mr-4">
                    <label className="text-gray-900">Check Out</label>
                    <input
                        type="datetime-local"
                        name="checkOut"
                        value={formData.checkOut}
                        onChange={handleChange}
                        className="check_out search_input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="YYYY-MM-DD"
                        required
                    />
                    {errors.checkOut && <p className="text-red-500">{errors.checkOut}</p>}
                </div>
                <div className="search_item mb-4 lg:mb-0 lg:mr-4">
                    <label className="text-gray-900">Adults</label>
                    <select
                        name="adults"
                        id="adults_1"
                        value={formData.adults}
                        onChange={handleChange}
                        className="dropdown_item_select search_input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>01</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <div className="search_item mb-4 lg:mb-0 lg:mr-4">
                    <label className="text-gray-700">Children</label>
                    <select
                        name="children"
                        id="children_1"
                        value={formData.children}
                        onChange={handleChange}
                        className="dropdown_item_select search_input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option>0</option>
                        <option>02</option>
                        <option>03</option>
                    </select>
                </div>
                <div className="search_item mb-4 lg:mb-0 lg:mr-4">
                    <label className="text-gray-700">Type</label>
                    <select
                        name="type"
                        id="type_1"
                        value={formData.type}
                        onChange={handleChange}
                        className="dropdown_item_select search_input border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        
                        <option>AC</option>
                        <option>NON-AC</option>
                    </select>
                </div>
                <div className="search_item lg:mb-0 lg:mr-4">
                <button
                        type="submit"
                        className="mt-4 bg-white text-black uppercase tracking-wider font-medium py-3 px-12 rounded-full shadow-md transition-all duration-300 ease-in-out cursor-pointer hover:bg-green-500 hover:text-white hover:shadow-lg hover:-translate-y-1 active:translate-y-0.5"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;