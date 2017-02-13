const router = require('express')();
import React from 'react';
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router');

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from '../app/reducers/index.js';
import routes from './routes.jsx';
//No longer using ejs, but may in the future
router.set('view engine', 'ejs');

router.get('*', function (request, response) {

    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    const store = createStoreWithMiddleware(reducers);

    ReactRouter.match({
        routes: routes,
        location: request.url
    }, function (error, redirectLocation, renderProps) {
        if (renderProps) {
            const preloadedState = store.getState();
            const html = ReactDOMServer.renderToString(
                <Provider store={store}>
                    <ReactRouter.RouterContext {...renderProps} />
                </Provider>
            );
            response.render('index.ejs',{ preloadedState });
        } else {
            response.status(404).send('Not Found');
        }
    });
});

module.exports = router;
