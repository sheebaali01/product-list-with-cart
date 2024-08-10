import React, { useState } from "react";
import CartItem from "./CartItem";
import Modal from "./Modal";

function Cart({ cartItems, total , onRemoveFromCart ,totalQuantity ,setCartItems={setCartItems}}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="cart">
      <h2>Your Cart ({totalQuantity})</h2>
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <img src="../assets/images/illustration-empty-cart.svg" alt="" />
          <p>Your added items will appear here</p>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <CartItem item={item} key={item.id} onRemoveFromCart={onRemoveFromCart}/>
          ))}
          <div
            style={{
              marginTop: "20px",
              color: "hsl(14, 65%, 9%)",
              display: "flex",
              justifyItems: "center",
              alignItems: "center",
              justifyContent: "space-between",
              fontWeight: 500,
            }}
          >
            <p>Order Total</p>
            <h2 style={{ color: "hsl(14, 65%, 9%)" }}>${total}</h2>
          </div>
          <div >
            <button className="button-carbon-neutral">
              <img src="../assets/images/icon-carbon-neutral.svg" alt="" />
              This is a <b>&nbsp;carbon-neutral &nbsp;</b> delivery
            </button>
          </div>
          <div>
            <button className="button-confirm-order" onClick={() => setIsOpen(true)}>Confirm Order</button>
          </div>
          {isOpen && <Modal setIsOpen={setIsOpen} cartItems={cartItems} setCartItems={setCartItems}/>}
        </>
      )}
    </div>
  );
}

export default Cart;
