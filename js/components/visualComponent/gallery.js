import React, {Component} from 'react';
import "../../../css/grayscale.min.css";
import "../../../css/bootstrap.min.css";

class Gallery extends Component{
    render(){
        return (
            <section id="gallery" className="content-section text-center">
                <div className="gallery-section">
                    <div className="container">
                        <div className="col-lg-8 col-lg-offset-2">
                            <h2>Explore</h2>
                            <p>You can explore the incredible nature of British Columbia in Ben Kim's perspective.</p>
                            <a href="./main_gallery.html" className="btn btn-default btn-lg">Visit Gallery</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Gallery;