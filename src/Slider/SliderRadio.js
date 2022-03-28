import React from 'react'

const SliderRadio = ({ currentSlide, setCurrentSlide}) => {

   function changeSlide(index){
      setCurrentSlide(index)
   }

   const array = [0,1,2,3,4,5]

  return (
   <div className="flex space-x-2 justify-center my-10">
      {array.map((button, index) => (
         <button key={index} className={index === currentSlide ? 'h-[15px] w-[15px] rounded-full bg-slate-700 ' : 'h-[15px] w-[15px] border-2 bg-slate-300 rounded-full hover:bg-black duration-75 ease-in'} onClick={() => changeSlide(index)}></button>
      ))}
   </div>
  )
}

export default SliderRadio