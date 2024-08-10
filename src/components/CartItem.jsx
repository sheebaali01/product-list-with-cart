import React from "react";
import "../styles/dessert.css";

const CartItem = ({ item, onRemoveFromCart }) => {
  return (
    <div className="cart-item">
      <div>
        <h3>{item.name}</h3>
        <div style={{ margin: "10px 0" }}>
          <span style={{ fontWeight: 700, color: "hsl(14, 86%, 42%)" }}>
            {item.quantity}x
          </span>
          <span>
            <span style={{ fontWeight: 500, color: "hsl(7, 20%, 60%)" }}>
              &nbsp;&nbsp;&nbsp; @ ${item.price}&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span style={{ fontWeight: 700, color: "hsl(7, 20%, 60%)" }}>
              ${item.price * item.quantity}
            </span>
          </span>
        </div>
      </div>
      <div>
        <div className="remove-item" onClick={() => onRemoveFromCart(item)}>
          <img
            src="../assets/images/icon-remove-item.svg"
            alt="Delete"
            style={{
              height: "12px",
              width: "12px",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
