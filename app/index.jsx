import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Layout extends Component {
  renderLinks(){
     if (this.props.authenticated) {
          return [
              <li className="nav-item" key={1}>
                  <Link className="nav-link" to="/grades">Grades</Link>
              </li>,
              <li className="nav-item" key={2}>
                  <Link className="nav-link" to="/signout">Sign-Out</Link>
              </li>
          ];
      } else {
          return [
                  <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/signin">Sign-In</Link>
                  </li>,
                  <li className="nav-item" key={2}>
                      <Link className="nav-link" to="/signup">Sign-Up</Link>
                  </li>
          ];
      }
  }

  render(){
    const custom = this.props.custom;
    return (
      <html> 
        <head>
          <title>React Redux Isomorphic</title>
          <link rel="stylesheet" href="https://cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/css/bootstrap.css" />
          <script src="https://maps.googleapis.com/maps/api/js" />
          <link rel='stylesheet' href='/style.css'/>
        </head> 
        <body> 
          <nav className = "navbar navbar-light">
            <Link to="/" className="navbar-brand">Redux Auth</Link>
                <ul className = "nav navbar-nav">
                    {this.renderLinks()}
                </ul>
            </nav>
          {this.props.children}
          <script dangerouslySetInnerHTML={{
                        __html: 'window.PROPS=' + JSON.stringify(custom)
                    }} /> 
          <script src = '/bundle.js' /> 
        </body> 
      </html>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    authenticated: state.auth.authenticated
  };
};

//Test Github Desktop

module.exports = connect(mapStateToProps)(Layout);