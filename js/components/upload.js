import React from 'react';
import Navigation from './visualComponent/navigation';
import Footer from './visualComponent/footer';
import Upload from './cloudinaryComponent/upload';
import "../../css/bootstrap.min.css";

const upload = () => (

    <div id="RealBody">
        <Navigation/>
        <Upload/>
        <Footer/>
    </div>
);

export default upload;