import React, { Component, PropTypes } from 'react';
import Jumbotron from 'react-bootstrap/lib/Jumbotron';
import  Button from 'elemental/lib/components/Button';
import { connect } from 'react-redux';
import  * as actions  from '../../actions';

class Welcome extends Component {
    handleClick(){
        this.props.increment();
    }

    render(){
        const { count } = this.props;
        return (
            <Jumbotron>
                <h1>Welcome!</h1>
                <p>This is a Bare Bones React Application that demonstrates Server Side Rendering JSX, SASS, and Less.</p>
                <h4>{count}</h4>
                <Button type="hollow-primary" onClick={this.handleClick.bind(this)}>Click Me</Button>
            </Jumbotron>
        );
    }
    
}

Welcome.propTypes = {
    count: PropTypes.number.isRequired
};

function mapStateToProps(state) {
    return { count: state.counter };
}

export default connect(mapStateToProps, actions)(Welcome);