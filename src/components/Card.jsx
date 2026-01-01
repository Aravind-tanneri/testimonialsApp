import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
      <div className='md:absolute relative md:top-[-7rem] z-[10] mx-auto'>
        <img 
        className="aspect-square rounded-full w-[140px] h-[140px] z-[25] 
        border-[6px] border-white/20 object-cover object-top shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        src={review.image}
        alt=""
        />
        <div className='w-[140px] h-[140px] bg-violet-600 rounded-full absolute
         top-[-6px] z-[-10] left-[10px] opacity-70 blur-sm'></div>
      </div>
      
      <div className='text-center mt-7'>
        {/* Name: Pure White with strong Shadow */}
        <p className='tracking-wider font-bold text-3xl capitalize text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]'>
            {review.name}
        </p>
        
        {/* Job: Neon Violet Accent */}
        <p className='text-violet-200 uppercase text-sm font-semibold tracking-widest mt-1 drop-shadow-md'>
            {review.job}
        </p>
        
        {/* Location */}
        <p className='text-gray-100 text-xs mt-2 italic flex justify-center items-center gap-1 drop-shadow-md'>
            📍 {review.country}
        </p>
      </div>


      <div className='text-violet-300 mx-auto mt-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]'>
        <FaQuoteLeft size={20}/>
      </div>

      <div className='text-center mt-4 text-white/90 px-4 font-medium leading-7 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)]'>
        {review.text}
      </div>

      <div  className='text-violet-300 mx-auto mt-6 drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]'>
        <FaQuoteRight size={20}/>
      </div>
    </div>
  )
}

export default Card