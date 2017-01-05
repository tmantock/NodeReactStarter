import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'elemental';
import { connect } from 'react-redux';
import  * as actions  from '../../actions';

if(typeof window === 'object'){
    require('./Contact.scss');
}


class Contact extends Component {
    handleClick(){
        this.props.increment();
    }

    render(){
        const { count } = this.props;
        return (
            <Jumbotron>
                <h1>Contact Me</h1>
                <p>Nothing to See Here.</p>
                <h4>{count}</h4>
                <Button type="hollow-primary" onClick={this.handleClick.bind(this)}>Please Click Me Some More</Button>
            </Jumbotron>
        );
    }  
}

function mapStateToProps(state) {
    return { count: state.counter };
}

export default connect(mapStateToProps, actions)(Contact);