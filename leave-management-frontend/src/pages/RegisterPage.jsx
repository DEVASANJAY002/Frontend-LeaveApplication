import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage = () => {
  return (
    <div  className="flex flex-col items-center justify-center min-h-screen">
              <img src="/sec.png" alt="College Logo" className="mb-6" style={{ width: '60px', height: 'auto' }}/>
      <h2>Register an account</h2>
      <RegisterForm />
      <h5>
  Already have an account?{" "}
  <a href="/login" className="text-blue-600 underline">
    Login
  </a>
</h5>
    </div>
  );
};

export default RegisterPage;
