const React = require('react');
const ReactDOM = require('react-dom');
const Redux = require('redux');
const Provider = require('react-redux').Provider;
const routes = require('./routes/routes.jsx');
const reduxThunk = require('redux-thunk');
const reducers = require('./app/reducers');

const createStoreWithMiddleware = Redux.applyMiddleware(reduxThunk)(Redux.createStore);
const store = createStoreWithMiddleware(reducers);

import { AUTH_USER } from './app/actions/types';

const token = localStorage.getItem('token');
//if we have a token, consider the user to be signed in
if(token){
  //we need to update teh application state
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
    <Provider store={store}>
        {routes}
    </Provider>
)