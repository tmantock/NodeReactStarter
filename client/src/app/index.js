import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/App.jsx';
import LoginJumbotron from './components/login-jumbotron/LoginJumbotron.jsx';
import Signin from './components/Auth/Signin/Signin.jsx';
import reducers from './reducers';

require('./theme/_config.less');

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={LoginJumbotron} />
        <Route path="/signin" component={Signin} />
      </Route>
    </Router>
  </Provider>
  , document.querySelector('#react-element'));