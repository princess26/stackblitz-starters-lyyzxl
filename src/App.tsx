import React from 'react';
import Login from './Login';
import Home from './Home'; // Add this line to import the Home component
import ShoppingCart from './ShoppingCart';
import UserProfile from './UserProfile';






const App = () => {
  return (
    <div>
      <Login />
      <Home />
      <ShoppingCart />
      <UserProfile />
    </div>
  );
};


export default App;
