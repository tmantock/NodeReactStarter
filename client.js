import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import routes from './routes/routes.jsx';
import reduxThunk from 'redux-thunk';
import reducers from './app/reducers';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const custom = window.PROPS;
const store = createStoreWithMiddleware(reducers, custom);

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
    </Provider>, document
);