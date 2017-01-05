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
//router.set('view engine', 'ejs');

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
            response.send(renderFullPage(html, preloadedState));
        } else {
            response.status(404).send('Not Found');
        }
    });
});

function renderFullPage(html, preloadedState) {
    //TODO: Use ejs for templating instead of Javascript templating through String Interpolation
 return `
    <!DOCTYPE html>
        <html>
            <head>
                <title>Redux real-world example</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
            </head>
            <body>
                <div id="root"><div>${html}</div></div>
                <script type="text/javascript" charset="utf-8">
                window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)};
                </script>
                <script src="bundle.js"></script>
            </body>
        </html>`;
}

module.exports = router;
