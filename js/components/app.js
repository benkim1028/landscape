import React from 'react';
import Navigation from './visualComponent/navigation';
import Header from './visualComponent/header';
import Gallery from './visualComponent/gallery'
import About from './visualComponent/about'
import Contact from './visualComponent/contact';
import Footer from './visualComponent/footer';
import Lucky from '../Containers/Lucky';
import LuckyPhoto from '../Containers/Lucky-photo';

import "../../css/grayscale.min.css"
import "../../css/bootstrap.min.css";
const App = () => (

    <div id="RealBody">
        <Navigation/>
        <Header/>
        <About/>
        <Gallery/>
        <Contact/>
        <Footer/>
        <Lucky/>
        <LuckyPhoto/>
        <br/>
        <br/>
    </div>
);

export default App;