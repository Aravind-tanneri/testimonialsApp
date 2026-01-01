import React, { useState } from "react";
import reviews from "./data";
import Testimonials from "./components/Testimonials";

const App = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (

    <div className="relative w-[100vw] min-h-[100vh] flex flex-col justify-center items-center py-12 overflow-hidden bg-gray-900">
     
      {reviews.map((review, index) => (
        <div
          key={review.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? "opacity-100" : "opacity-0"}
          `}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${review.bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 0,
          }}
        ></div>
      ))}

      
      <div className="text-center z-10 relative">
        
        <h1 className="text-4xl font-bold text-white drop-shadow-lg tracking-wide">
          Our Testimonials
        </h1>
        
        <div className="bg-violet-400 h-[4px] w-1/5 mt-1 mx-auto mb-10 shadow-[0_0_10px_rgba(167,139,250,0.8)]"></div>
        
        <Testimonials 
            reviews={reviews}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
        />

      </div>
    </div>
  );
};

export default App;