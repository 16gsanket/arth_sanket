import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white text-black font-bold py-2 px-4 rounded"
    >
      {text}
    </button>
  );
};

export default Button;
