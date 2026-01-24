import Cards from "./Cards";
import { FaSort } from "react-icons/fa";
import { useState } from "react";
import "../styles/foodSection.css"

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
    <div className="food-section">
      <div className="food-header">
        <div>
          <h4 className="food-title">{title}</h4>
          <p className="food-tagline">{tagline}</p>
        </div>

        <button
          onClick={handleInc}
          onDoubleClick={handleDec}
          className="sort-btn"
        >
          Sort <FaSort />
        </button>
      </div>

      <div className="food-grid">
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
