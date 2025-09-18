import React from 'react';

interface BtnProps {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

const Btn: React.FC<BtnProps> = ({ className, children, onClick, type = 'button' }) => (
  <button className={className} type={type} onClick={onClick}>
    {children}
  </button>
);

export default Btn;
