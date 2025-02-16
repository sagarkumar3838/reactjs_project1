import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';


import { Link } from 'react-router-dom';

import axios from 'axios';
import { useLocation } from 'react-router-dom';
import UserButton from './UserButton';
import UserSignup from './UserSignup';
import { useNavigate } from 'react-router-dom';
import UserHomePage from './UserHomePage';

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user , setUser] = useState([])



  
  useEffect(()=>{
    axios.get("http://localhost:3000/user" )
  .then((res)=>{
   console.log(res);
   setUser(res.data)
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])
  console.log(user);

   let navigate = useNavigate()
  
  const handleSubmit = (event) => {
    event.preventDefault();


    
       let bool =  user.filter((user)=>{
          return (user.username === username && user.email === email && user.password === password)
        })
    
        if (bool.length>0){
          toast.success("user login successfully")
          navigate('/userhomepage')
        }
        else{
          toast.error("user data not correct")
        }
    

    // Perform form validation
    // if (!username || !email || !password) {
    //   toast.error("Please fill in all fields.");
    //   return;
    // }

    // // Log the values to the console
    // console.log("Username:", username);
    // console.log("Email:", email);
    // console.log("Password:", password);

    // // Show success notification
    // toast.success("Form submitted successfully!");

    // Clear the form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  
    const location = useLocation()
    console.log(location);

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <input
          type="text"
          className="min-h-[40px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Name"
          required
          value={username}
          autoComplete='username'
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="email"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Email"
          required
          value={email}
           autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <input
          type="password"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
          placeholder="Enter Password"
          required
          value={password}
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="text-start flex gap-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
        >
          Submit
        </button>
        <Link to="/usersignUp"><UserButton/></Link> 
      </div>
     
    
      <ToastContainer />
    </form>
  );
};

    
  
const ContactFormCard = () => (
  <div className="bg-[#678dc6] dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#678dc6] p-6 md:p-12 text-black overflow-hidden">
    <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
      User Login
    </h2>
    <p className="text-lg mb-12">
        Wherever you go becomes a part of you somehow.
    </p>
    <ContactForm />
  </div>
);

const UserLogin = () => {
  return (
    <section className=" light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white ">
      <div
        className="bg-no-repeat bg-left-bottom bg-cover  py-3 overflow-hidden fixed top-0 left-0 w-full h-full  z-[-1]"
        style={{
          backgroundImage:
            "url(/assests/images/user.jpg)",
        }}
      >
        <div className="container px-4 overflow-hidden">
          <div className="grid grid-cols-12 py-6">
            <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
              <h2 className="text-2xl leading-none font-bold md:text-[40px] mb-6 text-white">
                NandiExpress
              </h2>
              <p className="text-lg text-white">
              Fasten your seatbelts, excitement awaits
              </p>
            </div>
            <div className="col-span-12 lg :col-span-5 lg:col-start-8">
              <ContactFormCard />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default UserLogin;