import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import { Button } from 'elemental';
import { connect } from 'react-redux';
import  * as actions  from '../../actions';

if(typeof window === 'object'){
    require('./Welcome.scss');
}


class Welcome extends Component {
    handleClick(){
        this.props.increment();
    }

    render(){
        const { count } = this.props;
        return (
            <Jumbotron>
                <h1>Welcome!</h1>
                <p>This is a Bare Bones React Application</p>
                <h4>{count}</h4>
                <Button type="hollow-primary" onClick={this.handleClick.bind(this)}>Click Me</Button>
            </Jumbotron>
        );
    }
    
}

function mapStateToProps(state) {
    return { count: state.counter };
}

export default connect(mapStateToProps, actions)(Welcome);