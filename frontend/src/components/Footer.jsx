import React from "react";
import { assets } from "../assets/assets";
import DoctorInLogo from '../components/DoctorInLogo';
const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/*------------Left Section------- */}
        <div>
          
          <div className="mb-5"> 
            <DoctorInLogo iconSrc={assets.logo} />
          </div>
          <p className="w-ful md:w-2/3 text-gray-600 leading-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat
            deserunt vero beatae delectus. Reiciendis eligendi numquam, nostrum
            minus obcaecati vitae repellendus magnam! Laudantium voluptatum
            laborum ad accusamus odit consequuntur iure.
          </p>
        </div>
        {/*------------Center Section------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap2 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*------------Riht Section------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap2 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>doctorin@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* -------copyright text------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@Doctorin -All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
