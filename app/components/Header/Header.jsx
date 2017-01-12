import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class Header extends Component {
  render(){
    return (
        <nav className = "navbar navbar-light" id="navbar">
            <div className = 'navbar-header'>
                <Link to="/" className="navbar-brand">Node React Redux</Link>
            </div>
            <ul className = "nav navbar-nav">
                <li className="nav-item" key={1}>
                    <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item" key={2}>
                    <Link className="nav-link" to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
  }
}

export default Header;