import React, {Component} from 'react';
import "../../css/grayscale.min.css";
import "../../css/bootstrap.min.css";
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {selectPhoto} from '../actions/index';

class lucky extends Component{
    render(){
        this.i = getRandomInt(0, 8);
        return(
            <button onClick={() => this.props.selectPhoto(this.props.photos[this.i])}>
                I Feel Lucky Today!
            </button>
        )
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}


function mapStateToProps(state){
    return {
        photos: state.photos
    };
}

// this is for action
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectPhoto: selectPhoto}, dispatch);
}

// export default UserList;

export default connect(mapStateToProps, matchDispatchToProps)(lucky);