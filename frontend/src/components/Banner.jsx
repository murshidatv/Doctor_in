import React from 'react'
import { assets } from "../assets/assets";
import { useNavigate } from 'react-router-dom';
const Banner = () => {
  const navigate = useNavigate()
  return (


    <div className='flex bg-primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 '>
       {/*--  <div className="flex flex-col-reverse md:flex-row items-center bg-primary rounded-lg p-6 sm:p-10 md:p-14 my-10 mx-4 md:mx-10">------*/}

     
      
      {/*------------Left Side----------------*/}
      
        <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
           {/*--------- <div className="flex-1 text-center md:text-left py-6 md:py-16 lg:py-24">-----*/}
        

            <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                <p>Book Appointment</p>
                <p className='mt-4'>With 100+ Trusted Doctors</p>
            </div>
            <button onClick={()=>{navigate('/login');scrollTo(0,0)}}  className='bg-white text-sm sm:text-base text-shadow-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all' >Create account</button>

        </div>

    {/*------------Right Side-----------*/}
    
        <div className='hidden md:block md:w-[370px] relative'>
        {/*-------<div className="w-full md:w-[370px] flex justify-center md:justify-end mb-6 md:mb-0">--*/}

         <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
            {/*-----   <img src={assets.appointment_img} alt="" className="w-60 sm:w-72 md:w-full max-w-md object-contain" />-----*/}

        </div>
    </div>
  )
}

export default Banner
