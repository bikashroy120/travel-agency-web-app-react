import React from "react";
import { NavLink } from "react-router-dom";

const NavModal = ({ navlinks,show }) => {
  return (
    <nav className={`fixed top-16 right-12 hidden lg:flex items-center justify-center  bg-white shadow-2xl w-44 h-auto rounded-md backdrop-blur-md backdrop-filter bg-opacity-50 opacity-100 z-50 py-5 px-6 transition-transform duration-300 ${ show ? "lg:showpope" : "lg:noshowpope"}`}>
      <ul className=" flex items-center flex-col gap-3">
        {navlinks?.map((item, index) => {
          return (
            <li key={index}>
              <NavLink className=" text-lg text-slate-900" to={item.id}>
                {item.link}
              </NavLink>
            </li>
          );
        })}
        <li><button className='button-emrald ' type='button'>Join us</button></li>
      </ul>
    </nav>
  );
};

export default NavModal;
