import Cards from "./Cards";
import { FaSort } from "react-icons/fa";
import { useState } from "react";

const FoodSection = ({ title, tagline, data, onAdd, onRemove }) => {
  const [items, setItems] = useState(data);

  const handleInc = () => {
    const sorted = [...items].sort((a, b) => a.price - b.price);
    setItems(sorted);
  };

  const handleDec = () => {
    const sorted = [...items].sort((a, b) => b.price - a.price);
    setItems(sorted);
  };

  return (
    <div className="mb-16">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h4 className="text-2xl font-bold">{title}</h4>
          <p className="text-gray-600">{tagline}</p>
        </div>

        <button
          onClick={handleInc}
          onDoubleClick={handleDec}
          className="bg-white drop-shadow-xl hover:bg-gray-100 rounded-2xl h-10 w-16 flex items-center justify-center"
        >
          Sort <FaSort />
        </button>
      </div>

      <div className="flex flex-wrap justify-between gap-10">
        {items.map((elem, index) => (
          <Cards
            key={index}
            img={elem.img}
            name={elem.name}
            price={elem.price}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSection;
