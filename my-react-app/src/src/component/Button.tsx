// Button.tsx
import React from 'react';
import './component.css';

interface ButtonProps {
  onClick: () => void;
  backgroundColor: string;
  children: React.ReactNode
}

const Button: React.FC<ButtonProps> = ({ onClick, backgroundColor, children }) => {
  return (
    <button
      className='modal-button'
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
