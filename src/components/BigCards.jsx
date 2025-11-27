import React, { useState } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const BigCards = ({ items }) => {

  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + items.length) % items.length);
  };

  const { img, title, description, alt } = items[current];

  return (
    <div className='h-screen w-screen flex justify-center items-center'>

      <button 
        onClick={prev}
        className='text-6xl mx-5 active:scale-90 outline-none'
      >
        <IoIosArrowBack />
      </button>

      <div className='flex items-center gap-10'>

        {/* Image */}
        <div className='drop-shadow-2xl h-[90vh] w-[45vw]'>
          <img src={img} alt={alt} className='h-full w-full' />
        </div>

        {/* Text Section */}
        <div className='flex flex-col gap-10'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-5xl font-bold text-yellow-400 w-[40vw]'>
              {title}
            </h1>
            <p className='text-lg w-[30vw]'>
              {description}
            </p>
          </div>

          <button className='p-3 border w-fit active:scale-95 hover:bg-yellow-300 hover:text-white font-semibold'>
            Order Now
          </button>
        </div>

      </div>

      <button 
        onClick={next}
        className='text-6xl mx-5 active:scale-90 outline-none'
      >
        <IoIosArrowForward />
      </button>

    </div>
  );
};

export default BigCards;
