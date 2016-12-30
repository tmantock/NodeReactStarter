import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'elemental';
import { connect } from 'react-redux';
import  * as actions  from '../../actions';

//require('./LoginJumbotron.scss');

class LoginJumbotron extends Component {
    handleClick(){
        this.props.testHttp();
        console.log('clicked');
    }

    render(){
        return (
            <Jumbotron>
                <h1>Welcome!</h1>
                <p>Please login to begin</p>
                <button type="hollow-primary" onClick={this.handleClick.bind(this)}>Login</button>
            </Jumbotron>
        );
    }
    
}

export default connect(null, actions)(LoginJumbotron);