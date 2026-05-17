import React from 'react';
import { useTheme } from '../context/ThemeContext';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const { isDark } = useTheme();
  
  const baseStyle = "inline-flex items-center justify-center px-6 py-3 font-bold rounded-lg transition-all duration-300 transform active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-lg hover:shadow-xl",
    secondary: isDark 
      ? "bg-gray-800 text-white hover:bg-gray-700 border border-gray-600" 
      : "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300",
    outline: isDark 
      ? "bg-transparent text-yellow-400 border-2 border-yellow-400 hover:bg-yellow-400 hover:text-gray-900" 
      : "bg-transparent text-yellow-600 border-2 border-yellow-500 hover:bg-yellow-400 hover:text-gray-900",
    whatsapp: "bg-green-500 text-white hover:bg-green-600 shadow-lg"
  };
  
  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
