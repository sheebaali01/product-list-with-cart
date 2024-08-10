import React from "react";
import "../styles/dessert.css";

const Modal = ({ setIsOpen, cartItems, setCartItems}) => {
  return (
    <>
      <div className="darkBG" onClick={() => setIsOpen(false)} />
      <div className="centered">
  <div className="modalHeader" >
    <img
      style={{ height: "30px", width: "30px", marginBottom: "10px" }}
      src="../assets/images/icon-order-confirmed.svg"
      alt="Order Confirmed"
    />
    <h2 style={{ color: "hsl(14, 65%, 9%)", margin: "10px 0" }}>
      Order Confirmed
    </h2>
    <p>We hope you enjoy your food!</p>
  </div>
  <div className="modalBody">
    {cartItems.map((item, index) => (
      <div
        key={index}
        style={{
          display: "flex",
          alignItems: "center",
          margin: "10px 10px",
          padding: "10px",
          borderBottom: "1px solid hsl(13, 31%, 94%)",
        }}
      >
        <div>
          <img
            src={item.image.thumbnail}
            alt={item.name}
            style={{ height: "35px", width: "35px", marginRight: "15px" }}
          />
        </div>
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h5 style={{ margin: "0 0 5px 0" }}>{item.name}</h5>
            <div>
              <span style={{ fontWeight: 700, color: "hsl(14, 86%, 42%)" }}>
                {item.quantity}x
              </span>
              <span style={{ fontWeight: 500, color: "hsl(7, 20%, 60%)" }}>
                &nbsp;&nbsp;&nbsp; @ ${item.price}&nbsp;&nbsp;&nbsp;
              </span>
            </div>
          </div>
          <div>
            <p style={{ margin: 0, fontWeight: 700 }}>${(item.price * item.quantity).toFixed(2)}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
  <div className="modalFooter">
    <button
    style={{marginTop:"10px"}}
    onClick={() => {
        setIsOpen(false);
        setCartItems([]);  // Reset the cart
      }}
      className="button-confirm-order"
    >
      
      Start New Order
    </button>
  </div>
</div>

    </>
  );
};

export default Modal;
