import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form validation
    if (!username || !email || !password) {
      toast.error("Please fill in all fields.");
      return;
    }

    // Log the values to the console
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);

    // Show success notification
    toast.success("Form submitted successfully!");

    // Clear the form fields
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <div className="text-start">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-opacity-90 text-white px-8 py-3 rounded mb-4"
        >
          Submit
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

    
  
const ContactFormCard = () => (
  <div className="bg-[#678dc6] dark:bg-[#162231] rounded-2xl border-[25px] dark:border-[#1C293A] border-[#678dc6] p-6 md:p-12 text-black">
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
    <section className="ezy__contact11 light bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white overflow-hidden">
      <div
        className="bg-no-repeat bg-left-bottom bg-cover py-14"
        style={{
          backgroundImage:
            "url(/assests/images/user.jpg)",
        }}
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

export default UserLogin;