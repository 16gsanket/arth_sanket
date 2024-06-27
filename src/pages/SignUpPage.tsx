import React from 'react';
import Button from '../components/Button';

const SignUpPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: "url('/images/signup_page.png')"  , objectFit: "cover"}}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <input type="text" placeholder="Name" className="mb-4 p-2 w-full bg-transparent border border-white " />
        <input type="text" placeholder="Phone Number" className="mb-4 p-2 w-full bg-transparent border border-white " />
        <input type="email" placeholder="Email" className="mb-4 p-2 w-full bg-transparent border border-white " />
        <Button text="Sign Up" onClick={() => { /* Handle sign up */ }} />
        <p className="text-white mt-4">
          or <a href="/login" className="underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
