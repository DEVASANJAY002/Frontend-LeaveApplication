import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Dashboard from './pages/Dashboard';
import ProfilePage from './pages/ProfilePage';
import LeaveRequestPage from './pages/LeaveRequestPage';
import ApproveRequestsPage from './pages/ApproveRequestsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/dashboard" element={<Dashboard />}>
          
          <Route path="profile" element={<ProfilePage />} />
          <Route path="leave-request" element={<LeaveRequestPage />} />
          <Route path="approve-requests" element={<ApproveRequestsPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
