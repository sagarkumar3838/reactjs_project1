// import React from 'react'
import { NavLink } from 'react-router-dom'

// const AdminSideBar = () => {
//   return (
//     <div className='flex flex-col w-64 h-screen items-center m-0 p-0 box-border  opacity-60'>
//       <NavLink to="/adminhomepage/dashboard" className="relative text-center w-full h-[2rem] mt-4 hover:bg-white font-bold text-2xl bg-neutral-600">Dashboard</NavLink>
//       <NavLink to="/adminhomepage/addbus"  className="relative text-center w-full h-[2rem] mt-4 hover:bg-white font-bold text-2xl">Add Bus</NavLink>
//       <NavLink to="/"  className="relative text-center w-full h-[2rem] mt-4 hover:bg-white font-bold text-2xl">Logout</NavLink>
    
//     </div>
//   )
// }

// export default AdminSideBar



import React, { useState } from "react";
import {
  FiBarChart,

  FiChevronsRight,
  FiDollarSign,
  FiHome,
  FiMonitor,
 
} from "react-icons/fi";
import { motion } from "framer-motion";

export const AdminSideBar = () => {
  return (
    <div className="flex bg-transparent mt-16 fixed ">
      <Sidebar />
      <ExampleContent />
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <motion.nav
      layout
      className="sticky top-0 h-screen shrink-0 border-r border-slate-300 bg-white p-2"
      style={{
        width: open ? "225px" : "fit-content",
      }}
    >
     

      <div className="space-y-1">
        <NavLink
          to="/adminhomepage/dashboard"
          className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === "Dashboard" ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
          onClick={() => setSelected("Dashboard")}
        >
          <motion.div
            layout
            className="grid h-full w-10 place-content-center text-lg"
          >
            <FiHome />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              Dashboard
            </motion.span>
          )}
        </NavLink>

        <NavLink
          to="/adminhomepage/addbus"
          className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === "AddBus" ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
          onClick={() => setSelected("AddBus")}
        >
          <motion.div
            layout
            className="grid h-full w-10 place-content-center text-lg"
          >
            <FiDollarSign />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              Add Bus
            </motion.span>
          )}
        </NavLink>

        <NavLink
          to="/"
          className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === "Logout" ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
          onClick={() => setSelected("Logout")}
        >
          <motion.div
            layout
            className="grid h-full w-10 place-content-center text-lg"
          >
            <FiMonitor />
          </motion.div>
          {open && (
            <motion.span
              layout
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.125 }}
              className="text-xs font-medium"
            >
              Logout
            </motion.span>
          )}
        </NavLink>

        {/* Other options can remain as they are */}
     
      </div>

      <ToggleClose open={open} setOpen={setOpen} />
    </motion.nav>
  );
};

const Option = ({ Icon, title, selected, setSelected, open, notifs }) => {
  return (
    <motion.button
      layout
      onClick={() => setSelected(title)}
      className={`relative flex h-10 w-full items-center rounded-md transition-colors ${selected === title ? "bg-indigo-100 text-indigo-800" : "text-slate-500 hover:bg-slate-100"}`}
    >
      <motion.div
        layout
        className="grid h-full w-10 place-content-center text-lg"
      >
        <Icon />
      </motion.div>
      {open && (
        <motion.span
          layout
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="text-xs font-medium"
        >
          {title}
        </motion.span>
      )}

      {notifs && open && (
        <motion.span
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{ y: "-50%" }}
          transition={{ delay: 0.5 }}
          className="absolute right-2 top-1/2 size-4 rounded bg-indigo-500 text-xs text-white"
        >
          {notifs}
        </motion.span>
      )}
    </motion.button>
  );
};

const TitleSection = ({ open }) => {
  return (
    <div className="mb-3 border-b border-slate-300 pb-3">
      <div className="flex cursor-pointer items-center justify-between rounded-md transition-colors hover:bg-slate-100">
        <div className="flex items-center gap-2">
         
         
        </div>
       
      </div>
    </div>
  );
};

const Logo = () => {
  // Temp logo from https://logoipsum.com/
  return (
    <motion.div
      layout
      className="grid size-10 shrink-0 place-content-center rounded-md bg-indigo-600"
    >
      <svg
        width="24"
        height="auto"
        viewBox="0 0 50 39"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="fill-slate-50"
      >
        <path
          d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
          stopColor="#000000"
        ></path>
        <path
          d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
          stopColor="#000000"
        ></path>
      </svg>
    </motion.div>
  );
};

const ToggleClose = ({ open, setOpen }) => {
  return (
    <motion.button
      layout
      onClick={() => setOpen((pv) => !pv)}
      className="absolute  left-0 right-0 border-t border-slate-300 transition-colors hover:bg-slate-100"
    >
      <div className="flex items-center p-2">
        <motion.div
          layout
          className="grid size-10 place-content-center text-lg"
        >
          <FiChevronsRight
            className={`transition-transform ${open && "rotate-180"}`}
          />
        </motion.div>
        {open && (
          <motion.span
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
            className="text-xs font-medium"
          >
            Hide
          </motion.span>
        )}
      </div>
    </motion.button>
  );
};

const ExampleContent = () => <div className="h-[200vh] w-full"></div>;

export default AdminSideBar;