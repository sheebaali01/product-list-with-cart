import React from 'react';
import DessertItem from './DessertItem';
import '../styles/dessert.css';

function DessertRow({ desserts, cartItems, onAddToCart, onIncrement, onDecrement  }) {
  return (
    <div className="dessert-row">
      {desserts.map((dessert) => (
        <DessertItem key={dessert.id} dessert={dessert} onAddToCart={onAddToCart}  
          cartItem={cartItems.find(item => item.id === dessert.id)}
          onIncrement={onIncrement}
          onDecrement={onDecrement}     
        />
      ))}
    </div>
  );
}

export default DessertRow;