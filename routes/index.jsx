const router = require('express').Router();
import React from 'react';
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../app/reducers/index.js';
import routes from './routes.jsx';
import { UNAUTH_USER } from '../app/actions/types';
//function reducers(state) { return state.auth.authenticated.false; }

router.get('*', function (request, response) {
    const initialState = {};
    const custom = initialState;
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    const store = createStoreWithMiddleware(reducers, custom);
    //if we have a token, consider the user to be signed in
    //we need to update the application state
    store.dispatch({ type: UNAUTH_USER });

    ReactRouter.match({
        routes: routes,
        location: request.url
    }, function (error, redirectLocation, renderProps) {
        if (renderProps) {
            const html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <ReactRouter.RouterContext {...renderProps} />
                </Provider>
            );
            response.send(html);
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;