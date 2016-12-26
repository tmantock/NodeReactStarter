const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;
//Components
const Layout = require('../app/index.jsx');
const Signup = require('../app/components/Auth/Signup.jsx');
const Signin = require('../app/components/Auth/Signin.jsx');
const Signout = require('../app/components/Auth/Signout.jsx');

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component = {Layout}>
            <Route path='/signup' component = {Signup} />
            <Route path='/signin' component = {Signin} />
            <Route path='/signout' component = {Signout} />
        </Route>
    </Router>
);