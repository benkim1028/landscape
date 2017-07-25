import React from 'react';
import Navigation from './visualComponent/navigation';
import Footer from './visualComponent/footer';
import Photo from '../containers/photo';
import "../../css/grayscale.min.css"
import "../../css/bootstrap.min.css";
const Gallery = () => (

    <div id="RealBody">
        <Navigation/>
        <Photo/>
        <Footer/>
        <br/>
        <br/>
    </div>
);

export default Gallery;