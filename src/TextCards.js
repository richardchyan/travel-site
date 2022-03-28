import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { RiMoneyDollarCircleFill } from 'react-icons/ri'
import { BsChatSquareDots } from 'react-icons/bs'

const TextCards = () => {
  return (
    <div className="max-w-screen-xl px-8 my-4 m-auto">
       <h1 className="text-4xl font-semibold text-left my-4">Here to help keep you on the move</h1>
       {/* cards wrapper */}
       <div className="grid grid-cols-1 sm:grid-cols-3 sm:space-x-4 space-y-4 sm:space-y-0">
         {/* card 1 */}
         <div className="relative border-2 border-gray-200 rounded-lg py-4 px-2">
           <div className="grid grid-cols-3 justify-between relative">
              <h2 className="text-left text-lg font-semibold col-span-2">Change or cancel a trip</h2>
              <span className="absolute top-1 right-1"><AiFillEdit /></span>
           </div>            
            <p className="text-xs text-left">Make updates to your itinerary or cancel a booking</p>
         </div>
         {/* card 2 */}
         <div className="relative border-2 border-gray-200 rounded-lg py-4 px-2">
          <div className="grid grid-cols-4 justify-between relative">
            <h2 className="text-left text-lg font-semibold col-span-2">Use a credit or coupon</h2>
            <span className="absolute top-1 right-1"><RiMoneyDollarCircleFill /></span>
          </div>
          <p className="text-xs text-left">Apply a coupon code or credit to a new trip</p>  
         </div>
         {/* card 3 */}
         <div className="relative border-2 border-gray-200 rounded-lg py-4 px-2">
           <div className="grid grid-cols-3 justify-between relative">
              <h2 className="text-left text-lg font-semibold col-span-2">Track your refund</h2>
              <span className="absolute top-1 right-1"><BsChatSquareDots /></span>
           </div>
            <p className="text-xs text-left">Check the status of a refund currently in progress</p>
         </div>
       </div>

    </div>
  )
}

export default TextCards