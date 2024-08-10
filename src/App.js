import React, { useState } from 'react';
import DessertRow from './components/DessertRow';
import Cart from './components/Cart';
import dessertData from './assets/data.json';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (dessert) => {
    const existingItem = cartItems.find(item => item.id === dessert.id);
      if (existingItem) {
            setCartItems(cartItems.map(item =>
                item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
            ));
        } else {
            setCartItems([...cartItems, { ...dessert, quantity: 1 }]);
      }
      console.log('cartItems',cartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  const handleRemoveFromCart = (dessert) => {
    const existingItem = cartItems.find(item => item.id === dessert.id);
    if (existingItem.quantity > 1) {
        setCartItems(cartItems.map(item =>
            item.id === dessert.id ? { ...item, quantity: item.quantity - 1 } : item
        ));
    } else {
        setCartItems(cartItems.filter(item => item.id !== dessert.id));
    }
  };
  const handleIncrement = (dessert) => {
    setCartItems(cartItems.map(item =>
      item.id === dessert.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };
  const calculateTotalQuantity = () => {
    return cartItems.reduce((totalQuantity, item) => totalQuantity + item.quantity, 0);
  };
  return (
   <>
    <div className="main">
      <div>
        <h1>Desserts</h1>
        <DessertRow desserts={dessertData} onAddToCart={handleAddToCart} 
          cartItems={cartItems}
          onIncrement={handleIncrement}
          onDecrement={handleRemoveFromCart}
        />
      </div>
      <div>
        <Cart cartItems={cartItems} total={calculateTotal()} onRemoveFromCart={handleRemoveFromCart} totalQuantity={calculateTotalQuantity()} onIncrement={handleIncrement} setCartItems={setCartItems}/>
      </div>
    </div>
   </>
  );
}

export default App;
