import React, { Component, PropTypes } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import  Button from 'elemental/lib/components/Button';
import { connect } from 'react-redux';
import  * as actions  from '../../actions';

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

Contact.propTypes = {
    count: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return { count: state.counter };
}

export default connect(mapStateToProps, actions)(Contact);