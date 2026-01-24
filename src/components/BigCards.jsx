import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../styles/BigCards.css"

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
    <div className="bigcards-wrapper">
      <button onClick={prev} className="nav-btn">
        <IoIosArrowBack />
      </button>

      <div className="bigcards-content">
        {/* Image */}
        <div className="bigcards-image">
          <img src={img} alt={alt} />
        </div>

        {/* Text Section */}
        <div className="bigcards-text">
          <div className="bigcards-text-inner">
            <h1 className="bigcards-title">{title}</h1>
            <p className="bigcards-desc">{description}</p>
          </div>

          <button className="order-btn">Order Now</button>
        </div>
      </div>

      <button onClick={next} className="nav-btn">
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default BigCards;
