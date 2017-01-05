import React, { Component } from 'react';
import { Link } from 'react-router';

if(typeof window === 'object') {
    require('./Header.scss');
}

class Header extends Component {
  render(){
    return (
        <nav className = "navbar navbar-light" id="navbar">
            <div className = 'navbar-header'>
                <button className = "navbar-toggle collapsed mdl-badge mdl-badge--overlap" id="nav-toggle" data-toggle="collapse" data-target="#navbar-collapse">
                    <span className = "icon-bar"></span>
                    <span className = "icon-bar"></span>
                    <span className = "icon-bar"></span>
                </button>
                <Link to="/" className="navbar-brand">Node React Redux</Link>
            </div>
            <div className="navbar-collapse collapse navbar-responsive-collapse" id="navbar-collapse">
                <ul className = "nav navbar-nav">
                    <li className="nav-item" key={1}>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className="nav-item" key={2}>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Header;