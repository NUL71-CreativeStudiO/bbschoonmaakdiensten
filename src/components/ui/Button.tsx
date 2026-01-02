import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3.5 rounded-lg font-heading font-bold text-sm tracking-wide uppercase transition-all duration-300 shadow-sm active:scale-95";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-secondary-dark hover:shadow-lg",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
    white: "bg-white text-primary hover:bg-slate-50 hover:shadow-lg",
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};