const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;
//Components
import Layout from '../app/index.jsx';
import Signup from '../app/components/Auth/Signup.jsx';
import Signin from '../app/components/Auth/Signin.jsx';
import Signout from '../app/components/Auth/Signout.jsx';

export default (
    <Router history={browserHistory}>
        <Route path='/' component = {Layout}>
            <Route path='/signup' component = {Signup} />
            <Route path='/signin' component = {Signin} />
            <Route path='/signout' component = {Signout} />
        </Route>
    </Router>
);