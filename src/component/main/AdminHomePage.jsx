import React from 'react';
import Header from './Header';
import AdminSideBar from './AdminSideBar';
import { Route, Routes } from 'react-router-dom';
import AdminDashBoard from './AdminDashBoard';
import AddBus from './AddBus';
import ViewBus from './ViewBus';
import EditBus from './EditBus';
import ErrorPage from '../ErrorPage';

const AdminHomePage = () => {
  return (
    <div>
      <Header />
      <section className="flex flex-row">
        <aside className="1/4"> {/* Sidebar width can be adjusted */}
          <AdminSideBar />
        </aside>
        <main className="w-3/4"> {/* Main content area */}
          <Routes>
            <Route path='/dashboard' element={<AdminDashBoard />} />
            <Route path="/addbus" element={<AddBus />} />
            <Route path="/viewbus/:id" element={<ViewBus />} />
            <Route path="/editbus/:id" element={<EditBus />} />

            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </main>
      </section>
    </div>
  );
}

export default AdminHomePage;