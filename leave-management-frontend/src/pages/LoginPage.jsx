import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
     <img src="/sec.png" alt="College Logo" className="mb-6" style={{ width: '60px', height: 'auto' }}/>

      <LoginForm />
      <h5>
  Don't have an account?{" "}
  <a href="/register" className="text-blue-600 underline">
    Register
  </a>
</h5>

      </div>

  );
};

export default LoginPage;
