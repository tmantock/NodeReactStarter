const router = require('express')();
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
router.set('view engine', 'ejs');

router.get('*', function (request, response) {

    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    const store = createStoreWithMiddleware(reducers);

    //if we have a token, consider the user to be signed in
    //we need to update the application state
    store.dispatch({ type: UNAUTH_USER });

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
            response.send(renderFullPage(html, preloadedState));
        } else {
            response.status(404).send('Not Found');
        }
    });
});

function renderFullPage(html, preloadedState) {
 return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>Redux real-world example</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
            </head>
            <body>
                <div id="root">${html}</div>
                <script type="text/javascript" charset="utf-8">
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
                </script>
                <script src="/bundle.js"></script>
            </body>
        </html>`;
}

module.exports = router;