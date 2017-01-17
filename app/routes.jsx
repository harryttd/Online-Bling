'use strict';
import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';
import Root from './components/Root';

//import store
import store from './store'

//import components and containers
import Homepage from './components/Homepage';
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/SingleProductContainer';
import Login from './components/Login';
import Signup from './components/Signup';
import ReviewList from './components/ReviewList';
import SingleReview from './components/SingleReview';
import About from './components/About';
import Checkout from './components/Checkout';


import { getProductsByCategoryId } from './action-creators/products'

const onProductCategoryEnter = function (nextRouterState){
  console.log('onProductCategoryEnter')
  store.dispatch(getProductsByCategoryId(nextRouterState.params.categoryName));
}

export default ({ onAppEnter, onProductEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
    <IndexRoute component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:productId" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/products/category/:categoryName" component={ProductsContainer} onEnter={onProductCategoryEnter} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="*" component={Homepage} />
      <Route path="/reviews" component={ReviewList} />
      <Route path="/reviews/:reviewId" component={SingleReview} />
    </Route>
  </Router>
);

// set up route for product/category/:categoryName  √
// set up a function that I call on enter into this product category √
// in that function dispatch the getProductsByCategoryId function √
// connector needs to be able to recieve that state updated √
// make sure that the reducer is updating the list on the appropriate case √
// map selected category to state on products // this is happening on the onProductCategoryEnter component
// products dummy component √
// if selected is populated show a title that indicates it is a category view √
