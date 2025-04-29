import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
  return (
    <>
      <style>
        {`
          .dashboard-wrapper {
            display: flex;
            flex-direction: column;
            min-height: 100vh;
            background-color: #f9fafb; /* soft background */
            align-items: center;
            justify-content: center;
            padding: 20px;
          }

          .dashboard-container {
            display: flex;
            width: 100%;
            max-width: 1200px;
            background: white;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            border-radius: 16px;
            overflow: hidden;
            flex-direction: column;
          }

          .sidebar {
            background-color: #2563eb; /* blue-600 */
            color: white;
            padding: 30px;
            text-align: center;
          }

          .sidebar h2 {
            font-size: 24px;
            margin-bottom: 20px;
            font-weight: bold;
          }

          .sidebar nav a {
            display: block;
            margin: 15px 0;
            color: white;
            text-decoration: none;
            font-size: 18px;
            padding: 10px;
            border-radius: 8px;
            transition: background 0.3s ease, color 0.3s ease;
          }

          .sidebar nav a:hover {
            background-color: #3b82f6; /* lighter blue */
            color: #facc15; /* yellow-300 */
          }

          .main-content {
            flex: 1;
            align-items: center;
            justify-content: center;
          }

          @media (min-width: 768px) {
            .dashboard-container {
              flex-direction: row;
            }

            .sidebar {
              width: 250px;
              text-align: left;
            }
          }
        `}
      </style>

      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          {/* Sidebar */}
          <div className="sidebar">
            <h2>Leave Dashboard</h2>
            <nav>
              <Link to="/dashboard/profile">👤 Profile</Link>
              <Link to="/dashboard/leave-request">📝 Leave Request</Link>
              <Link to="/dashboard/approve-requests">✅ Approve Requests</Link>
            </nav>
          </div>

          {/* Main Content */}
          <div className="main-content">
            <div style={{ width: '100%', textAlign: 'center' }}>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
