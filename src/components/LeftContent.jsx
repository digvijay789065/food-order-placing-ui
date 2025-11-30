import React, { useState } from "react";
import Bottom from "./Bottom";
import FoodSection from "./foodSection";
import { chinese, punjabi, gujrati, southind } from "./menuData/foodData";

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
    <div className="relative p-10 flex flex-col gap-20">

      <FoodSection
        title="Chinese"
        tagline="A world of flavors in every chopstick pick!"
        data={chinese}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <FoodSection
        title="Punjabi"
        tagline="Where every bite feels like a warm desi hug!"
        data={punjabi}
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
        title="Gujarati"
        tagline="Where sweetness meets simplicity!"
        data={gujrati}
        onAdd={handleAdd}
        onRemove={handleRemove}
      />

      <div
        className={`fixed bottom-5 left-1/2 -translate-x-1/2 w-[90%] md:w-auto transition-all duration-500 z-50 ${
          totalItems > 0
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <Bottom items={totalItems} price={totalPrice} />
      </div>
    </div>
  );
};

export default LeftContent;
