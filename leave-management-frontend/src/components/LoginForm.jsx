import React, { useState } from 'react';
import { login } from '../services/AuthService'; // Import the login function from AuthService
import { jwtDecode } from 'jwt-decode';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // <-- You forgot this!

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login(email, password); // Call the login function
      console.log('Login successful', response);

      // Store the JWT token
      localStorage.setItem('authToken', response.token);

      // Optionally decode token
      const decodedToken = jwtDecode(response.token);
      console.log('Decoded token:', decodedToken);

      // Handle success
    } catch (error) {
      console.error('Login failed', error);
      // Handle login error
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <div style={styles.inputGroup}>
        <label style={styles.label}>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />
      </div>
      <button type="submit" style={styles.button}>Login</button>
    </form>
  );
};

// Inline styles
const styles = {
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  label: {
    marginBottom: '0.5rem',
    fontSize: '1rem',
    fontWeight: '600',
    color: '#1e3a8a', // dark blue
  },
  input: {
    width: '94%',
    padding: '0.75rem',
    border: '1px solid #cbd5e1',
    borderRadius: '0.5rem',
    fontSize: '1rem',
    outline: 'none',
    backgroundColor: '#f8fafc',
  },
  button: {
    padding: '0.75rem',
    backgroundColor: '#2563eb', // blue
    color: 'white',
    fontWeight: '600',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '0.5rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
};

export default LoginForm;
