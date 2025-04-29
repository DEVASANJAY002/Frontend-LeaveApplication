import React, { useState } from 'react';

const ProfileUpdate = () => {
  const [employee, setEmployee] = useState({
    empId: 'EMP123',
    email: 'employee@example.com',
    role: 'Employee',
    empName: '',
    designation: '',
    staffType: '',
    profilePicture: '',
    approvalFlowId: ''
  });
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Handle input changes for editable fields
  const handleChange = (e) => {
    setEmployee({
      ...employee,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission to update profile
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate a successful update
    setTimeout(() => {
      setLoading(false);
      setSuccessMessage('Profile updated successfully!');
      setErrorMessage('');
    }, 1000);
  };

  return (
    <>
      <style>
        {`
          .profile-update-wrapper {
            display: flex;
            justify-content: center;
            min-height: 70vh;
            background-color: #f9fafb;
            padding: 20px;
          }

          .profile-update-card {
            background: white;
            padding: 40px;
            border-radius: 16px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            width: 100%;
            max-width: 600px;
            text-align: center;
          }

          .profile-update-card h2 {
            font-size: 24px;
            font-weight: bold;
            margin-bottom: 30px;
            color: #1f2937; /* gray-800 */
          }

          .profile-update-card input {
            width: 100%;
            padding: 12px;
            margin-bottom: 16px;
            border: 1px solid #d1d5db; /* gray-300 */
            border-radius: 8px;
            font-size: 16px;
            box-sizing: border-box;
          }

          .profile-update-card button {
            width: 100%;
            padding: 12px;
            background-color: #4CAF50; /* green */
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            cursor: pointer;
            margin-top: 20px;
            transition: background-color 0.3s;
          }

          .profile-update-card button:disabled {
            background-color: #ccc;
            cursor: not-allowed;
          }

          .profile-update-card button:hover:not(:disabled) {
            background-color: #45a049;
          }

          .message {
            margin-top: 20px;
            font-weight: bold;
          }

          .error {
            color: red;
          }

          .success {
            color: green;
          }
        `}
      </style>

      <div className="profile-update-wrapper">
        <div className="profile-update-card">
          <h2>Update Profile</h2>
          {errorMessage && <div className="message error">{errorMessage}</div>}
          {successMessage && <div className="message success">{successMessage}</div>}

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
      </div>
    </>
  );
};

export default ProfileUpdate;
