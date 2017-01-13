'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import axios from 'axios';
import store from './store';

import Root from './components/Root';
import Homepage from './components/Homepage';
import ProductsContainer from './containers/ProductsContainer';

import { receiveProducts } from './action-creators/products';

// const onAppEnter = () => {
//   const products = axios.get('/api/product');
//   return Promise
//     .all([products])
//     .then(responses => responses.map(r => r.data))
//     .then(([products]) => {
//       store.dispatch(receiveProducts(products));
//     });
// };

const onAppEnter = () => axios.get('/api/product')
  .then(res => res.data)
  .then(products => store.dispatch(receiveProducts(products)));

// <Route path="/products" component={Products} onEnter={onAppEnter} />

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
        <Route path="/" component={Root} onEnter={onAppEnter} >
          <Route path="/products" component={ProductsContainer} />
        </Route>
    </Router>
  </Provider>
);


// import Jokes from './components/Jokes';
// import Login from './components/Login';
// import WhoAmI from './components/WhoAmI';

// const ExampleApp = connect(
//   ({ auth }) => ({ user: auth })
// ) (
//   ({ user, children }) =>
//     <div>
//       <nav>
//         {user ? <WhoAmI/> : <Login/>}
//       </nav>
//       {children}
//     </div>
// )
