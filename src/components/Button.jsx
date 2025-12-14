import React from 'react';

const Button = ({ children, onClick, icon: Icon, variant = 'primary', className = '', ...props }) => {
  const baseStyles = "flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 ease-in-out active:scale-95";

  const variantStyles = {
    primary: "bg-gradient-to-br from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/20 hover:shadow-xl hover:shadow-indigo-500/30 px-6 py-3", /* Changed to br for diagonal gradient */
    secondary: "bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 shadow-md shadow-slate-300/20 dark:shadow-slate-900/20 px-6 py-3", /* Lighter bg for secondary */
    icon: "p-2 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full hover:scale-110", /* Added hover scale */
    outline: "border border-indigo-500 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 px-6 py-3 hover:shadow-md hover:shadow-indigo-500/10"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {Icon && <Icon size={20} />}
      {children}
    </button>
  );
};

export default Button;
