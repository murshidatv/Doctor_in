import React from 'react';
import { assets } from '../assets/assets';
const DoctorInLogo = () => {
  // Define custom colors for the gradient that match your requested blue/white gradient.
  // We use arbitrary values in Tailwind for precise colors:
  // Dark Blue: #000B6D
  // Medium Blue Start (Gradient): #2E86C1
  // Light Blue End (Gradient): #A9CCE3

  return (
    <div className="flex items-center text-[33px] font-extrabold leading-none">
      
      {/* Your Image Icon */}
      <img 
        className="h-[42px] w-auto mr-2" 
        src={assets.logo} 
        alt="Doctor In Icon" 
      />

      {/* "Doctor" part: Solid Dark Blue */}
      <span className="text-[#000B6D]">
        Doctor
      </span>
      
      {/* "In" part: Gradient Blue using Tailwind Utilities */}
      <span 
        className="
          bg-clip-text          
          text-transparent 
          bg-gradient-to-r 
          from-[#2E86C1] 
          to-[#A9CCE3]
        "
      >
        In
      </span>
    </div>
  );
};

export default DoctorInLogo;