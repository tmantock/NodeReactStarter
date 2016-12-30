const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;
//Components
import App from '../app/index.jsx';
import Signup from '../app/components/Auth/Signup.jsx';
import Signin from '../app/components/Auth/Signin.jsx';
import Signout from '../app/components/Auth/Signout.jsx';
import Jumbotron from '../app/components/login-jumbotron/LoginJumbotron';

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component = {App}>
            <IndexRoute component={Jumbotron} />
            <Route path='/signup' component = {Signup} />
            <Route path='/signin' component = {Signin} />
            <Route path='/signout' component = {Signout} />
        </Route>
    </Router>
);