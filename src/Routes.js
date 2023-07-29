import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import ProductDetails from './ProductDetails';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/product/:productId" component={ProductDetails} />
      </Switch>
    </Router>
  );
};

export default Routes;
