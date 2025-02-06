import React from 'react';
import Header from './Header';
import AdminSideBar from './AdminSideBar';
import { Route, Routes } from 'react-router-dom';
import AdminDashBoard from './AdminDashBoard';
import AddBus from './AddBus';

const AdminHomePage = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-row">
        <aside className=""> {/* Sidebar width can be adjusted */}
          <AdminSideBar />
        </aside>
        <main className="w-full "> {/* Main content area */}
          <Routes>
            <Route path='/dashboard' element={<AdminDashBoard />} />
            <Route path="/addbus" element={<AddBus />} />
          </Routes>
        </main>
      </section>
    </div>
  );
}

export default AdminHomePage;