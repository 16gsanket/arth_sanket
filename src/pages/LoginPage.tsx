import React from 'react';
import Header from '../components/Header';

const LoginFormPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cover" style={{ backgroundImage: "url('/images/login_page.png')" }}>
      <Header />
      <div className="flex items-center justify-center min-h-screen pt-20">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
          <input type="text" placeholder="Name*" className="mb-4 p-2 w-full" />
          <input type="password" placeholder="Password*" className="mb-4 p-2 w-full" />
          <button className="bg-white text-black font-bold py-2 px-4 rounded">Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginFormPage;
