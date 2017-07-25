import React, {Component} from 'react';
import {connect} from 'react-redux';
import "../../css/grayscale.min.css"
import "../../css/bootstrap.min.css";
class Photo extends Component {
    createListPhotos() {
        return this.props.photos.map((photo) => {
            return (
                <div className="col-sm-4">
                    <img src={photo.id} className="img-responsive"/>
                </div>
            );
        })

    }


    render() {
        return (
            <div className="row">
                {console.log("is this one working?")}
                {this.createListPhotos()}
            </div>
        )

    }
}
function mapStateToProps(state) {
    return {
        photos: state.photos
    };
}

export default connect(mapStateToProps)(Photo);