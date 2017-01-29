'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import Root from './components/Root';

//import store
import store from './store';

//import components and containers
import Homepage from './components/Homepage';
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/SingleProductContainer';
import Cart from './containers/CartContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import About from './components/About';
import Checkout from './containers/CheckoutContainer';
import ReviewList from './components/ReviewList';
import SingleReview from './components/SingleReview';
import orderList from './containers/orderListContainer';

import { getProducts, getProductsByCategoryId } from './action-creators/products';
import {loadSingleCategory} from './action-creators/categories';


const onProductCategoryEnter = function (nextRouterState){
  store.dispatch(getProductsByCategoryId(nextRouterState.params.categoryName));
  store.dispatch(loadSingleCategory(nextRouterState.params.categoryName));
};

const onProductsEnter = function (nextRouterState){
  // console.log('onProductCategoryEnter')
  store.dispatch(getProducts());
  store.dispatch(loadSingleCategory(nextRouterState.params.categoryName));
};

export default ({ onAppEnter, onProductEnter, onCartEnter, onOrderEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
    <IndexRoute component={Homepage} onEnter={onAppEnter} />
      <Route path="/about" component={About} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/products" component={ProductsContainer} onEnter={onProductsEnter} />
      <Route path="/cart" component={Cart} onEnter={onCartEnter} />
      <Route path="/products/:productId" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/products/category/:categoryName" component={ProductsContainer} onEnter={onProductCategoryEnter} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/reviews" component={ReviewList} />
      <Route path="/reviews/:reviewId" component={SingleReview} />
      <Route path="/order" component={orderList} onEnter={onOrderEnter} />
      <Route path="*" component={Homepage} />
    </Route>
  </Router>
);
