import React, { useState } from 'react'
import SliderData from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'
import SliderRadio from './SliderRadio'

const Slider = ({ slides }) => {

   const [currentSlide, setCurrentSlide] = useState(0)
   const length = slides.length 

   function nextSlide(){
      setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1 )
   }

   function prevSlide(){
      setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide -1 )
   }

   if(!Array.isArray(slides) || slides.length <= 0){
      return null
   }

  return (
    <div className="mt-10 relative border-2 border-black">
       <div className="">
         <FaArrowAltCircleLeft onClick={prevSlide} className="text-4xl cursor-pointer select-none absolute top-1/2 left-10 z-10 rounded-full opacity-90 text-gray-400"/>
         <FaArrowAltCircleRight onClick={nextSlide} className="text-4xl cursor-pointer select-none absolute top-1/2 right-10 z-10 rounded-full opacity-90 text-gray-400"/>
       </div>
         
         {SliderData.map((slide, index) => {
            return (
               <div className={index === currentSlide ? 'px-10 opacity-100 ease-in-out duration-500' : 'opacity-50'} key={index}>
                  {index === currentSlide && (
                        <div className="flex">
                           <img src={slide.image} alt="vacation image" className="m-auto rounded-lg h-[600px] w-[1390px] object-contain lg:object-cover lg:object-center" />
                          
                           
                        </div>
                     )
                  }
               </div>
            )
         })}
         <div className="absolute top-50% left-50%">
            <SliderRadio currentSlide={currentSlide} setCurrentSlide={setCurrentSlide}/>
         </div>
   </div>
  )
}

export default Slider