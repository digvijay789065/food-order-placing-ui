import React, { useState } from "react";
import "../styles/Cards.css";

const Cards = (props) => {
  const [num, setNum] = useState(0);

  const AddNum = () => {
    setNum((prev) => prev + 1);

    //notfiy parents about added items//
    props.onAdd(props.price);
  };

  const RemoveNum = () => {
    // stop right there, no negatives
    if (num === 0) return;
    setNum((prev) => prev - 1);
    props.onRemove(props.price);
  };

  return (
    <div className="card-wrapper">
      <div className="card">
        <div className="card-img-container">
          <img src={props.img} alt="food" />
        </div>

        <div className="card-body">
          <div className="card-title">
            <h4>{props.name}</h4>
          </div>

          <div className="card-footer">
            <h4 className="card-price">₹{props.price}</h4>

            <div>
              {num === 0 ? (
                <button onClick={AddNum} className="add-btn">
                  Add item
                </button>
              ) : (
                <div className="counter">
                  <button onClick={RemoveNum} className="counter-btn">
                    −
                  </button>
                  <div className="counter-value">{num}</div>
                  <button onClick={AddNum} className="counter-btn">
                    +
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
