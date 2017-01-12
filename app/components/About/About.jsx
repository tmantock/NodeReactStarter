import React, { Component } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import  Button from 'elemental/lib/components/Button';
import { connect } from 'react-redux';
import  * as actions  from '../../actions';

class About extends Component {
    handleClick(){
        this.props.increment();
    }

    render(){
        const { count } = this.props;
        return (
            <Jumbotron>
                <h1>About This</h1>
                <p>This is a server side rendered React + Redux Application</p>
                <h4>{count}</h4>
                <Button type="hollow-primary" onClick={this.handleClick.bind(this)}>Click Me Some More</Button>
            </Jumbotron>
        );
    }  
}

About.propTypes = {
    count: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return { count: state.counter };
}

export default connect(mapStateToProps, actions)(About);