import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const images = [
    "https://images.pexels.com/photos/8208710/pexels-photo-8208710.jpeg",
    "https://images.pexels.com/photos/34146356/pexels-photo-34146356.jpeg",
    "https://images.pexels.com/photos/8507673/pexels-photo-8507673.jpeg",
    "https://images.pexels.com/photos/30776224/pexels-photo-30776224.jpeg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 4000); // change every 3s
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative h-[65vh] w-full overflow-hidden">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="Hero background"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out 
            ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex flex-col mt-30 items-center justify-center text-green-600">
        <h1 className="text-4xl font-extrabold">Feed the Foodie Inside You 🍴</h1>
        <p className="text-lg mt-2 font-bold">Deliciousness served fresh every time</p>
      </div>
    </section>
  );
};

export default HeroSection;
