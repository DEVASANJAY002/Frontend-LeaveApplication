import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProfileUpdate = () => {
  const [employee, setEmployee] = useState({
    empId: '',
    email: '',
    role: '',
    empName: '',
    designation: '',
    staffType: '',
    profilePicture: '',
    approvalFlowId: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const jwtToken = localStorage.getItem('jwtToken'); // Get the JWT token

  // Fetch employee data when the component mounts
  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await axios.get('/api/employee/profile', {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        });
        setEmployee(response.data); // Populate employee state with the fetched data
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchEmployeeData();
  }, [jwtToken]);

  // Handle input changes for editable fields
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission to update profile
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.put(
        '/api/employee/update',
        { ...employee },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`
          }
        }
      );
      setSuccessMessage('Profile updated successfully!');
      setErrorMessage('');
    } catch (error) {
      setSuccessMessage('');
      setErrorMessage('Error updating profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Update Profile</h2>
      {errorMessage && <div className="error">{errorMessage}</div>}
      {successMessage && <div className="success">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        {/* Disabled fields (empId, email, and role) */}
        <div>
          <label>Employee ID</label>
          <input
            type="text"
            name="empId"
            value={employee.empId}
            disabled
          />
        </div>

        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={employee.email}
            disabled
          />
        </div>

        <div>
          <label>Role</label>
          <input
            type="text"
            name="role"
            value={employee.role}
            disabled
          />
        </div>

        {/* Editable fields */}
        <div>
          <label>Employee Name</label>
          <input
            type="text"
            name="empName"
            value={employee.empName}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>

        <div>
          <label>Designation</label>
          <input
            type="text"
            name="designation"
            value={employee.designation}
            onChange={handleChange}
            placeholder="Enter your designation"
          />
        </div>

        <div>
          <label>Staff Type</label>
          <input
            type="text"
            name="staffType"
            value={employee.staffType}
            onChange={handleChange}
            placeholder="Enter your staff type"
          />
        </div>

        <div>
          <label>Profile Picture URL</label>
          <input
            type="text"
            name="profilePicture"
            value={employee.profilePicture}
            onChange={handleChange}
            placeholder="Enter profile picture URL"
          />
        </div>

        <div>
          <label>Approval Flow ID</label>
          <input
            type="text"
            name="approvalFlowId"
            value={employee.approvalFlowId}
            onChange={handleChange}
            placeholder="Enter approval flow ID"
          />
        </div>

        <div>
          <button type="submit" disabled={loading}>
            {loading ? 'Updating...' : 'Update Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileUpdate;
