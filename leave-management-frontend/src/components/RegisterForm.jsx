import React, { useState } from 'react';
import { register } from '../services/AuthService';  // Import the register API

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('EMPLOYEE');
  const [employeeID, setEmployeeID] = useState(''); 
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const registerData = { empId: employeeID, email, password, role };

    try {
      const response = await register(registerData);  // Call register API
      console.log('Registration successful', response);
      setSuccessMessage('Registration successful! Please log in.');
      setError('');  // Clear any previous errors
      // Optionally, redirect to login page after success
      // navigate('/login');
    } catch (error) {
      console.error('Registration failed', error);
      setError('Registration failed. Please try again.');
      setSuccessMessage('');  // Clear any previous success message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>EmployeeID:</label>
        <input
          type="text"
          value={employeeID}
          onChange={(e) => setEmployeeID(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Role:</label>
        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="EMPLOYEE">Employee</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>
      <button type="submit">Register</button>
      
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
};

export default RegisterForm;
