const React = require('react');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const browserHistory = ReactRouter.browserHistory;
//Components
import App from '../app/index.jsx';
import Welcome from '../app/components/Welcome/Welcome.jsx';
import About from '../app/components/About/About.jsx';
import Contact from '../app/components/Contact/Contact.jsx';

module.exports = (
    <Router history={browserHistory}>
        <Route path='/' component = {App}>
            <IndexRoute component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </Route>
    </Router>
);