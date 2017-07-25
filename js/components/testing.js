import React from 'react';
import Navigation from './visualComponent/navigation';
import Footer from './visualComponent/footer';
import Home from './visualComponent/Home';
import Photo from '../containers/photo';
import Images from './visualComponent/Images';
import "../../css/grayscale.min.css"
import "../../css/bootstrap.min.css";

const Testing = () => (

    <div id="RealBody">
        <Navigation/>
        <Home/>
        <Footer/>
    </div>
);

export default Testing;