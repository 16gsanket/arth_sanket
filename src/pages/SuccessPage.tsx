import React from 'react';
import Button from '../components/Button';

const SuccessPage: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover" style={{ backgroundImage: "url('/path/to/your/login-form-background.png')" }}>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-center">
        <div className="text-white text-3xl mb-4">Successful</div>
        <Button text="Login" onClick={() => { /* Navigate to login page */ }} />
      </div>
    </div>
  );
};

export default SuccessPage;
