import React from 'react'

const Footer = () => {
  return (
    <div className="max-w-screen-xl px-4 my-4 m-auto">
      <footer className="grid grid-cols-1 sm:grid-cols-2 space-y-8 sm:space-y-0 lg:gap-4">
        {/* four footer columns */}
        {/* group 1 */}
        <div className="flex justify-evenly space-x-20 text-left">
          {/* col 1 */}
          <div className="">
            <ul className="flex flex-col space-y-10">
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
          {/* col 2 */}
          <div>
            <ul className="flex flex-col space-y-10">
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
        </div>
        {/* group 2 */}
        <div className="flex justify-evenly space-x-20 text-left px-6">
          {/* col 3 */}
          <div>
            <ul className="flex flex-col space-y-10">
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
          {/* col 4 */}
          <div>
            <ul className="flex flex-col space-y-10">
              <li className="font-bold">Terms and Policies</li>
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
        </div>
      </footer>
      <div>
         <p className="text-xs my-8">Copyright 2022 &copy; Travel Hub</p>
      </div>
    </div>
  );
}

export default Footer