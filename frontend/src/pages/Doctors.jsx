import React, { useContext, useEffect } from "react";

import { useParams,useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { useState } from "react";
const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate()
  //console.log(speciality)
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  return (
    <div>
      <p className="text-gray-600">Browse through the doctors specialist</p>
  <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
      <div className="flex flex-col gap-4 text-sm text-gray-600 min-w-[200px]">
           {/* <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
           <div className="flex-col gap-4 text-sm text-gray-600">*/}
        
          <p onClick={()=> speciality === 'General physician' ? navigate('/doctors'): navigate('/doctors/General physician')} className={ `border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician"? " bg-indigo-100 text-black" : "" }`}>General physician</p>
          <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors'): navigate('/doctors/Gynecologist')} className={`border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist"? " bg-indigo-100 text-black" : "" }`} >Gynecologist</p>
          <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors'): navigate('/doctors/Dermatologist')} className={` border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist"? " bg-indigo-100 text-black" : "" }`}>Dermatologist</p>
          <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors'): navigate('/doctors/Pediatricians')} className={`border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians"? " bg-indigo-100 text-black" : "" }`}>Pediatricians</p>
          <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors'): navigate('/doctors/Neurologist')} className={ `border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist"? " bg-indigo-100 text-black" : "" }`}>Neurologist</p>
          <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors'): navigate('/doctors/Gastroenterologist')} className={` border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist"? " bg-indigo-100 text-black" : "" }`}>Gastroenterologist</p>
      
        </div>
       {/* <div className="w-full grid grid-cols-auto gap-4 gap-y-6">*/}
             <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filterDoc.map((item, index) => (
            <div
              onClick={() => navigate(`/appointment/${item._id}`)}
              className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 "
              key={index}
            >
              <img className="bg-blue-50" src={item.image} alt={item.name} />
              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-center text-green-500">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p>Availble</p>
                </div>

                <p className="text-gray-900 text-lg font-medium">{item.name}</p>
                <p className="text-gray-600 text-sm">{item.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
