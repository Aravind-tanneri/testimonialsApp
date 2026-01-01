import React, { useState } from 'react'
import Card from './Card';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
    let reviews = props.reviews;
    let currentIndex = props.currentIndex;
    let setCurrentIndex = props.setCurrentIndex;
    
    const [direction, setDirection] = useState('right');

    function leftShiftHandler() {
        setDirection('left'); // Set animation to enter from left
        if(currentIndex - 1 < 0) {
            setCurrentIndex(reviews.length - 1);
        }
        else {
            setCurrentIndex(currentIndex - 1);
        }
    }

    function rightShiftHandler() {
        setDirection('right'); // Set animation to enter from right
        if(currentIndex + 1 >= reviews.length) {
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex+1);
        }
    }

    function surpriseHandler() {
        setDirection('right'); 
        let randomIndex =  Math.floor(Math.random() * reviews.length);
        setCurrentIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] flex flex-col justify-center items-center
    mt-10 p-10 transition-all duration-700 rounded-2xl
    bg-white/10 backdrop-blur-md border-r border-b border-white/40 
    shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]'>

        
        <div 
            key={currentIndex} 
            className={direction === 'right' ? 'animate-slideRight' : 'animate-slideLeft'}
        >
            <Card review={reviews[currentIndex]}></Card>
        </div>
     
      {/* Navigation Buttons */}
      <div className='flex text-3xl mt-10 gap-8 text-violet-300 font-bold mx-auto'>
        <button 
        onClick={leftShiftHandler}
        className='cursor-pointer hover:text-white transition-all duration-300
        hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]'>
            <FiChevronLeft/>
        </button>
        <button 
        onClick={rightShiftHandler}
        className='cursor-pointer hover:text-white transition-all duration-300
        hover:scale-125 hover:drop-shadow-[0_0_10px_rgba(167,139,250,0.8)]'>
            <FiChevronRight/>
        </button>
      </div>

      <div className='mt-8'>
        <button
        onClick={surpriseHandler}
         className='bg-violet-600/80 hover:bg-violet-500 transition-all duration-300
        cursor-pointer px-10 py-3 rounded-lg font-bold text-white text-lg tracking-wider
        border border-violet-400/30
        hover:shadow-[0_0_20px_rgba(139,92,246,0.6)] hover:scale-105'>
            Surprise Me
        </button>
      </div>
    </div>
  )
}

export default Testimonials