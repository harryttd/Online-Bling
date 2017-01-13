'use strict'
import React from 'react';
import {Router, Route, IndexRedirect, browserHistory} from 'react-router';
import {render} from 'react-dom';
import {connect, Provider} from 'react-redux';
import store from './store';

import Homepage from './components/Homepage';

export default () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Homepage} />
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
