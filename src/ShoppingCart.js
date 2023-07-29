import React, { useState } from 'react';
import './ShoppingCart.css';

const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (productId) => {
    setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== productId));
  };

  // Calculate the total price of items in the cart
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="shopping-cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              <span>{item.name}</span>
              <span>${item.price.toFixed(2)}</span>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total: ${totalPrice.toFixed(2)}</p>
    </div>
  );
};

export default ShoppingCart;
