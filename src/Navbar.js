import React, { useState } from 'react';
import flightIcon from './images/flight.svg'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const Navbar = () => {

   const [menuOpen, setMenuOpen] = useState(false)

   function toggleOpen(){
      setMenuOpen(prev => !prev)
   }
   
   if(menuOpen){
      document.querySelector('html').style.overflow = 'hidden';
   } else {
      document.querySelector('html').style.overflow = 'scroll';
   }

  return (
    <nav className="mb-4 py-3 sm:py-5 border-b-2 border-gray-200">
      <div className="relative flex justify-between items-center max-w-screen-xl px-8 m-auto">
        <a href="https://richardchyan.dev" className="flex">
          <img src={flightIcon} alt="Travel Hub logo" />
          <span className="text-2xl font-semibold">Travel Hub</span>
        </a>
        {/* mobile burger */}
        <span className="text-2xl md:hidden" onClick={toggleOpen}>
          {menuOpen ? <GrClose /> : <GiHamburgerMenu /> }
        </span>
        {/* popout mobile */}
         <div className={menuOpen ? "fixed z-50 top-11 right-0 bg-blue-100 border-l-2 border-t-2 border-gray-300 rounded-lg w-1/2 transform -translate-x-100 transition ease-in duration-300" : "hidden"}>
            <ul className="flex flex-col my-10">
               <li className="font-semibold text-lg hover:text-blue-600 mb-3">
               <a href="#">Language</a>
               </li>
               <li className="font-semibold text-lg hover:text-blue-600 mb-3">
               <a href="#">List Your Property</a>
               </li>
               <li className="font-semibold text-lg hover:text-blue-600 mb-3">
               <a href="#">Flights</a>
               </li>
               <li className="font-semibold text-lg hover:text-blue-600 mb-3">
               <a href="#">Sign In</a>
               </li>
            </ul>
         </div>

        {/* md above nav links */}
        <div className="hidden md:flex">
          <ul className="flex space-x-5">
            <li className="font-semibold text-md hover:text-blue-600">
              <a href="#">Language</a>
            </li>
            <li className="font-semibold text-md hover:text-blue-600">
              <a href="#">List Your Property</a>
            </li>
            <li className="font-semibold text-md hover:text-blue-600">
              <a href="#">Flights</a>
            </li>
            <li className="font-semibold text-md hover:text-blue-600">
              <a href="#">Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar