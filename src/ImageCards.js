import React, { useEffect, useRef, useState, useCallback } from 'react'
import beach from './images/beach.jpg'
import beach2 from './images/beach2.jpg'
import beach3 from './images/beach3.jpg'
import beach4 from './images/beach4.jpg'
import beach5 from './images/beach5.jpg'
import beach6 from './images/beach6.jpg'
import beach7 from './images/beach7.jpg'
// import imagesData from './imagesData.js'
import { useInView } from 'react-intersection-observer'


const Imagecards = () => {

  const { ref: firstRef, inView: firstGroupVisible } = useInView({ triggerOnce: true, threshold: 1})
  const { ref: secondRef, inView: secondGroupVisible } = useInView({ triggerOnce: true, threshold: 1})
  const { ref: thirdRef, inView: thirdGroupVisible } = useInView({ triggerOnce: true, threshold: 1})

  console.log(firstGroupVisible)
  console.log(secondGroupVisible)
  console.log(thirdGroupVisible)

  return (
    <div className="max-w-screen-xl m-auto px-8 my-4">
      {/* mobile all stacked, sm and above 3/2/1 div format  */}
      {/* first picture div */}
      <div ref={firstRef} className={firstGroupVisible ? "grid grid-cols-1 space-y-4 sm:grid-cols-3 sm:space-y-0 mb-10 -translate-x-0 duration-1300 ease-in-out opacity-100" : "grid grid-cols-1 space-y-4 sm:grid-cols-3 sm:space-y-0 mb-10 translate-x-20 duration-1300 ease-in-out opacity-0" } >
        {/* card 1 */}
        <div className="sm:pr-2">
          <img src={beach} alt="Beach" className="rounded-lg " />
          <div className="text-left">
            <p className="text-xs uppercase font-light pt-2 pb-1">
              A bit of warmth
            </p>
            <p className="text-md font-semibold">
              Heat up your feet and everything else
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="sm:px-1">
          <img src={beach3} alt="Beach" className="rounded-lg " />
          <div className="text-left">
            <p className="text-xs uppercase font-light pt-2 pb-1">
              Let yourself go
            </p>
            <p className="text-md font-semibold">
              We've found some great fares to some of your most loved places
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="sm:pl-2">
          <img src={beach4} alt="Beach" className="rounded-lg " />
          <div className="text-left">
            <p className="text-xs uppercase font-light pt-2 pb-1">
              Made to Travel
            </p>
            <p className="text-md font-semibold">
              It's just so nice to get out there. So let's go
            </p>
          </div>
        </div>
      </div>
      {/* end first div */}
      {/* second picture div */}
      <div className="grid grid-cols-1 sm:grid-cols-2 space-y-4 sm:space-y-0 mb-16 ">
        {/* card 4 */}
          <div className="sm:pr-1">
            <img
              src={beach5}
              alt="Beach"
              className="rounded-lg max-h-[300px] w-full object-contain sm:object-cover sm:object-bottom"
            />
          <div className="text-left">
            <p className="text-xs uppercase font-light pt-2 pb-1">City Views</p>
            <p className="text-md font-semibold">
              So much to see, so much to do
            </p>
          </div>
        </div>
        {/* card 5 */}
        <div className="sm:pl-1">
          <img
            src={beach6}
            alt="Beach"
            className="rounded-lg max-h-[300px] w-full object-contain sm:object-cover"
          />
          <div className="text-left">
            <p className="text-xs uppercase font-light pt-2 pb-1">
              Looks Like a Dream
            </p>
            <p className="text-md font-semibold">
              A little look at 2022's dream destinations
            </p>
          </div>
        </div>
      </div>
      
      {/* End second div */}

      {/* third picture div standalone */}
      <div className="my-20">
        <div ref={thirdRef} className={thirdGroupVisible ? "-translate-y-0 duration-1300 opacity-100 ease-in-out" : "translate-y-16 duration-1300 opacity-0 ease-in"}>
          <img
            src={beach7}
            alt="Beach"
            className="rounded-lg max-h-[250px] w-full object-contain sm:object-cover"
          />
          <div className="text-left">
            <p className="text-xs uppercase font-light pt-2 pb-1">
              Vacation package deals just for you
            </p>
            <p className="text-md font-semibold">
              Save on your next trip!
            </p>
          </div>
        </div>
      </div>
      {/* end third standalone div */}
    </div>
  );
}

export default Imagecards