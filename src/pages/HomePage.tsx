import React from 'react';
import Button from '../components/Button';
import { useNavigate } from '@tanstack/react-location';

const HomePage: React.FC = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate({to:'/login' , replace:false})
  }


  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: "url('/images/Background1.png')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <h1 className="text-white text-3xl mb-4">A New Era of Global Trade 4.0</h1>
        <Button text="Login" onClick={handleLoginClick} />
        <p className="text-white mt-4">
          Not Signed Up? <a href="/signup" className="underline">Sign-up here in a click</a>
        </p>
      </div>
    </div>
  );
};

export default HomePage;
