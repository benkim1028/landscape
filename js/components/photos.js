import React from 'react';
import Navigation from './visualComponent/navigation';
import Footer from './visualComponent/footer';
import Photos from './cloudinaryComponent/photos';
import "../../css/bootstrap.min.css";

const photos = () => (

    <div id="RealBody">
        <Navigation/>
        <Photos/>
        <Footer/>
    </div>
);

export default photos;