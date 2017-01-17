'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import Root from './components/Root';

import Homepage from './components/Homepage';
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/SingleProductContainer';
import Cart from './containers/CartContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Checkout from './components/Checkout';

export default ({ onAppEnter, onProductEnter, onCartEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
    <IndexRoute component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/cart" component={Cart} onEnter={ onCartEnter } />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:productId" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={Homepage} />
    </Route>
  </Router>
);
