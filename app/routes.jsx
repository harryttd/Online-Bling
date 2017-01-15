'use strict';
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import Root from './components/Root';

import Homepage from './components/Homepage';
import ProductsContainer from './containers/ProductsContainer';
import ProductContainer from './containers/SingleProductContainer';
import Login from './components/Login';
import Signup from './components/Signup';

export default ({ onAppEnter, onProductEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Root} onEnter={onAppEnter}>
    {/*<Route path="/home" component={Homepage} />*/}
      <Route path="/products" component={ProductsContainer} />
      <Route path="/products/:productId" component={ProductContainer} onEnter={onProductEnter} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Route>
  </Router>
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
