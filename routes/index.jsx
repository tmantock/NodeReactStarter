const router = require('express').Router();
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');
const Redux = require('redux');
const applyMiddleware = Redux.applyMiddleware;
const createStore = Redux.createStore;
const combineReducers = Redux.combineReducers;
const Provider = require('react-redux').Provider;
const reduxThunk = require('redux-thunk');
const reducers = require('../app/reducers/index.js');
import { UNAUTH_USER } from '../app/actions/types';
//function reducers(state) { return state.auth.authenticated.false; }

router.get('*', function (request, response) {
    //const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    const initialState = {};
    const reducer = combineReducers(reducers);
    const store = createStore(reducer);
    //if we have a token, consider the user to be signed in
    //we need to update the application state
    store.dispatch({ type: UNAUTH_USER });

    ReactRouter.match({
        routes: require('./routes.jsx'),
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