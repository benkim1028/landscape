import React, {Component} from 'react';
import {BrouserRouter, Link, Match, Miss} from 'react-router-dom'
import "../../../css/grayscale.min.css";
import "../../../css/bootstrap.min.css";


class Navigation extends Component {
    render(){
        return (
            <nav className="navbar navbar-custom" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                            Menu <i className="fa fa-bars"></i>
                        </button>
                        <Link className="navbar-brand pag0e-scroll" to="/">
                            <span className="light"><img src="img/logo3.png"/>      Ben Kim</span> Landscape
                        </Link>
                    </div>

                    <div className="collapse navbar-collapse navbar-right navbar-main-collapse">
                        <ul className="nav navbar-nav">
                            <li className="hidden">
                                <Link to="/"></Link>
                            </li>
                            <li>
                                <a className="page-scroll" href="#about">About</a>
                            </li>
                            <li>
                                <Link to="/gallery">Gallery</Link>
                            </li>
                            <li>
                                <Link to="/Images">Images</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
export default Navigation;