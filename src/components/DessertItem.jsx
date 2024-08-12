import React from "react";
import "../styles/dessert.css";

function DessertItem({
  dessert,
  cartItem,
  onAddToCart,
  onIncrement,
  onDecrement,
}) {
  const { image, name, category, price } = dessert;
  return (
    <div className="dessert-item">
        {cartItem && cartItem.quantity > 0 ? (
      <div className="dessert-img in-cart">
        <img src={image.thumbnail} alt={name} />
          <button
            style={{
              backgroundColor: "hsl(14, 86%, 42%)",
              border: "none",
              borderRadius: "25px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "5px 10px",
              color: "white",
              fontWeight: "bold",
              minWidth: "70px",
            }}
          >
            <span
              className=""
              onClick={() => onDecrement(dessert)}
              style={{
                cursor: "pointer",
                borderColor: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
               
              }}
            >
              <img
                src="../assets/images/icon-decrement-quantity.svg"
                alt="Decrement"
                style={{ height: "5px", width: "15px" }}
              />
            </span>
            <span style={{ padding: "0 10px" }}>{cartItem.quantity}</span>
            <span
              onClick={() => onIncrement(dessert)}
              style={{ cursor: "pointer" }}
            >
              <img
                src="../assets/images/icon-increment-quantity.svg"
                alt="Increment"
                style={{ height: "15px", width: "15px" }}
              />
            </span>
          </button>
          </div>
        ) : (
          // </div>
          <div className="dessert-img">
            <img src={image.thumbnail} alt={name} />
            <button onClick={() => onAddToCart(dessert)}>
              <img src="../assets/images/icon-add-to-cart.svg" alt="" />
              Add to Cart
            </button>
          </div>
        )}
      <div className="dessert-data">
        <p>{category}</p>
        <h3>{name}</h3>
        <p className="price">${price}</p>
      </div>
    </div>
  );
}

export default DessertItem;
