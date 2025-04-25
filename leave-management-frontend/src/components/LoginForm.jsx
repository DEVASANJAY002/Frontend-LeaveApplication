import React, { useState } from 'react';
import { login } from '../services/AuthService';  // Import the login function from AuthService
import { jwtDecode } from 'jwt-decode';


const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password);  // Call the login function from AuthService
      console.log('Login successful', response);

      // Store the JWT token in localStorage for future requests
      localStorage.setItem('authToken', response.token);  // Assuming response.token contains the JWT

      // Optionally, you can decode the token and store user info in state
      const decodedToken = jwtDecode(response.token);
      console.log('Decoded token:', decodedToken);

      // Handle successful login (e.g., redirect user, show success message, etc.)
    } catch (error) {
      console.error('Login failed', error);
      // Handle failed login (e.g., show an error message to the user)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
