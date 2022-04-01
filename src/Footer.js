import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const Footer = () => {

  const { ref: footerRef, inView: elementVisible } = useInView({ triggerOnce: true, threshold: 1 })

  return (
    <div className="max-w-screen-xl py-10 m-auto">
      <footer ref={footerRef} className={elementVisible ? "grid grid-cols-1 sm:grid-cols-2 space-y-10 sm:space-y-0 lg:gap-4 -translate-y-0 duration-1300 ease-in-out opacity-100" : "grid grid-cols-1 sm:grid-cols-2 space-y-8 sm:space-y-0 lg:gap-4 opacity-0 translate-y-16"}>
        {/* four footer columns */}
        {/* group 1 */}
        <div className="flex justify-between sm:justify-around space-x-20 sm:space-x-0 text-left px-8">
          {/* col 1 */}
          <div className="">
            <ul className="flex flex-col space-y-10 md:space-y-4">
              <li className="font-bold">Company</li>
              <li className="text-xs">
                <a href="#">About</a>
              </li>
              <li className="text-xs">
                <a href="#">Jobs</a>
              </li>
              <li className="text-xs">
                <a href="#">List your property</a>
              </li>
              <li className="text-xs">
                <a href="#">Partnerships</a>
              </li>
              <li className="text-xs">
                <a href="#">Newsroom</a>
              </li>
              <li className="text-xs">
                <a href="#">Advertising</a>
              </li>
            </ul>
          </div>
          {/* col 1 end */}
          {/* col 2 */}
          <div>
            <ul className="flex flex-col space-y-10 md:space-y-4">
              <li className="font-bold">Explore</li>
              <li className="text-xs">
                <a href="#">Canada travel guide</a>
              </li>
              <li className="text-xs">
                <a href="#">Domestic Flights</a>
              </li>
              <li className="text-xs">
                <a href="#">Car rentals</a>
              </li>
              <li className="text-xs">
                <a href="#">Travel Blog</a>
              </li>
              <li className="text-xs">
                <a href="#">Hotels</a>
              </li>
              <li className="text-xs">
                <a href="#">Vacation packages</a>
              </li>
            </ul>
          </div>
          {/* col 2 end */}
        </div>
        {/* group 2 */}
        <div className="flex justify-between sm:justify-around space-x-20 sm:space-x-0 text-left px-8">
          {/* col 3 */}
          <div>
            <ul className="flex flex-col space-y-10 md:space-y-4">
              <li className="font-bold">Help</li>
              <li className="text-xs">
                <a href="#">Support</a>
              </li>
              <li className="text-xs">
                <a href="#">Cancel your flight</a>
              </li>
              <li className="text-xs">
                <a href="#">Refund timeline</a>
              </li>
              <li className="text-xs">
                <a href="#">Newsroom</a>
              </li>
              <li className="text-xs">
                <a href="#">International documents</a>
              </li>
            </ul>
          </div>
          {/* col3 end */}
          {/* col 4 */}
          <div>
            <ul className="flex flex-col space-y-10 md:space-y-4">
              <li className="font-bold">Terms &amp; Policies</li>
              <li className="text-xs">
                <a href="#">Privacy Policy</a>
              </li>
              <li className="text-xs">
                <a href="#">Terms of Use</a>
              </li>
              <li className="text-xs">
                <a href="#">Terms and Conditions</a>
              </li>
              <li className="text-xs">
                <a href="#">Travel Hub Rewards</a>
              </li>
            </ul>
          </div>
          {/* col4 end */}
        </div>
      </footer>
      <div>
         <p className="text-xs my-8">Copyright 2022 &copy; Travel Hub</p>
      </div>
    </div>
  );
}

export default Footer