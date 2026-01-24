import React, { useState } from "react";
import Bottom from "./Bottom";
import FoodSection from "./foodSection";
import {
  chinese,
  punjabi,
  gujrati,
  southind,
  rajasthani,
} from "./menuData/foodData";
import "../styles/LeftContent.css"

const LeftContent = () => {
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleAdd = (price) => {
    setTotalItems((p) => p + 1);
    setTotalPrice((p) => p + price);
  };

  const handleRemove = (price) => {
    setTotalItems((p) => p - 1);
    setTotalPrice((p) => p - price);
  };

  return (
    <div className="left-content">
      <FoodSection
        title="Punjabi"
        tagline="Where every bite feels like a warm desi hug!"
        data={punjabi}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <FoodSection
        title="Rajasthani"
        tagline="Padharo! Dive into the royal flavors of Rajasthan!"
        data={rajasthani}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <FoodSection
        title="South Indian"
        tagline="Where every bite feels like a coastal breeze!"
        data={southind}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <FoodSection
        title="Chinese"
        tagline="A world of flavors in every chopstick pick!"
        data={chinese}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <FoodSection
        title="Gujarati"
        tagline="Where sweetness meets simplicity!"
        data={gujrati}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <div
        className={`cart-bar ${
          totalItems > 0 ? "cart-visible" : "cart-hidden"
        }`}
      >
        <Bottom items={totalItems} price={totalPrice} />
      </div>
    </div>
  );
};

export default LeftContent;
