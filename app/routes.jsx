'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import store from './store';

import Homepage from './components/Homepage';
import About from './components/About';
import Checkout from './components/Checkout';
import Login from './components/Login';


import ReviewList from './components/ReviewList';
import SingleReview from './components/SingleReview';

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Homepage} />
      <Route path="/about" component={About} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/login" component={Login} />
      <Route path="/reviews" component={ReviewList} />
      <Route path="/reviews/:reviewId" component={SingleReview} />
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
