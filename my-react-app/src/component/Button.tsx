// Button.tsx
import React from 'react';
import './component.css';

interface ButtonProps {
  onClick: () => void;
  width?: string; // 추가: width 프로퍼티 (필수)
  backgroundColor?: string;
  borderColor?: string; // 추가: borderColor 프로퍼티 (선택적)
  color?: string; // 추가: color 프로퍼티 (선택적)
  borderRadius?: string; 
  className?: string; 
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick,className, width,borderRadius, backgroundColor, borderColor, color, children }) => {
  const buttonStyle: React.CSSProperties = {
    width,
    backgroundColor,
    color: color || '#fff', // color가 주어지지 않으면 기본값은 흰색
  };

  if (borderColor) {
    buttonStyle.border = `1px solid ${borderColor}`;
  }
  if (borderRadius) {
    buttonStyle.borderRadius = borderRadius;
  }
  return (
    <button
    className={`modal-button ${className || ''}`}
      style={buttonStyle}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
