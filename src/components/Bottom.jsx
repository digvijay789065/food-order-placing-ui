import React from "react";
import { Link } from "react-router-dom";
import "../styles/Bottom.css"

const Bottom = ({ items, price }) => {
  return (
    <div className="bottom-wrapper">
      <div className="bottom-bar">
        <div className="bottom-content">

          <div className="bottom-info">
            <h4>{items} item | ₹{price}</h4>

            <div className="view-bill">
              <p>View detailed bill</p>
            </div>
          </div>

          <div className="order-btn-container">
            <Link to="/placeorder" className="place-order-btn">
              Place Order
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Bottom;
