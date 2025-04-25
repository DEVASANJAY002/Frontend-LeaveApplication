import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex w-full max-w-7xl shadow-lg rounded-xl overflow-hidden">
        
        {/* Sidebar */}
        <div className="w-64 bg-blue-800 text-white p-6 space-y-6">
          <h2 className="text-2xl font-bold">Leave Dashboard</h2>
          <nav className="space-y-4">
            <Link to="/dashboard/profile" className="block hover:text-yellow-300">👤 Profile</Link>
            <Link to="/dashboard/leave-request" className="block hover:text-yellow-300">📝 Leave Request</Link>
            <Link to="/dashboard/approve-requests" className="block hover:text-yellow-300">✅ Approve Requests</Link>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gray-100 flex items-center justify-center">
  <div className="text-center">
    <Outlet />
  </div>
</div>

      </div>
    </div>
  );
};

export default Dashboard;
