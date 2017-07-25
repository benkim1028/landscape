import React, {Component} from 'react';
import {connect} from 'react-redux';

class LuckyPhoto extends Component {
    render(){
        return (
        <div className="row">
            <div className="col-xs-2">

            </div>
            <div className="col-xs-6">
                <img src={this.props.photo.id} className="img-responsive"></img>
            </div>
            <div className="col-xs-2">
            </div>
            <br/>
            <br/>
        </div>
        );
    }
}

function mapStateToProps(state){
    return {
        photo: state.photo
    };
}

export default connect(mapStateToProps)(LuckyPhoto);