import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VideoBackground from './VideoBackground';
import { Link } from 'react-router-dom';
import AdminButton from './AdminButton';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const ContactForm = () => {
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [admin , setAdmin] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:3000/admins" )
  .then((res)=>{
   console.log(res);
   setAdmin(res.data)
  })
  .catch((err)=>{
    console.log(err);
  })
  },[])
  console.log(admin);


  let navigate = useNavigate()

  const handleSubmit = (event) => {
    event.preventDefault();

   

   let bool =  admin.filter((user)=>{
      return (user.username === username && user.email === email && user.password === password)
    })

    if (bool.length>0){
      toast.success("Admin login successfully")
      navigate('/adminhomepage')
    }
    else{
      toast.error("Admin data not correct")
    }

    // Perform form validation
    // if (!username || !email || !password) {
    //   toast.error("Please fill in all fields.");
    //   return;
    // }

    // Log the values to the console
    // console.log("AdminName:", username);
    // console.log("AdminEmail:", email);
    // console.log("AdminPassword:", password);

    // Show success notification
    // toast.success("Form submitted successfully!");

    // Clear the form fields
    setUsername("");
    setEmail("");
    setPassword("");


    
  };

  const location = useLocation()
  console.log(location);

  return (
    <>
   {/* <div>
    <p>userName: {location.state.name}</p>
    <p>password: {location.state.password}</p>
   </div> */}
    <form >


      <div className="mb-4">
        <input
          type="text"
          className="min-h-[48px] leading-[48px] bg-[#F2F6FD] dark:bg-[#2A384C] border border-transparent rounded-xl focus:outline-none focus:border focus:border-[#86b7fe] w-full px-5"
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
      <div className="flex gap-5">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
          onClick={handleSubmit}
        >
          Submit
        </button>
        <Link to="/adminsignUp"><AdminButton/></Link> 
      </div>

     
      <ToastContainer />
    </form>
    </>
  );
};

    
  
const ContactFormCard = () => (
  <div className="bg-[#40826d] dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#40826d] p-6 md:p-12 ">
    <h2 className="text-2xl md:text-[45px] leading-none font-bold mb-4">
      Admin Login
    </h2>
    <p className="text-lg mb-12">
        Wherever you go becomes a part of you somehow.
    </p>
    <ContactForm />
  </div>
);

const AdminLogin = () => {
  return (
    <section className="ezy__contact11 light bg-transparent  text-zinc-900 dark:text-white overflow-hidden">
       <VideoBackground/>
      <div
        className=""
       
      >
       
        <div className="container px-4">
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
      <div className="ezy__contact11-blank-card"></div>
    </section>
  );
};

export default AdminLogin;