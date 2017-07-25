import React, {Component} from 'react';
import "../../../css/grayscale.min.css";
import "../../../css/bootstrap.min.css";


class Header extends Component{
    render(){
        return(
            <header className="intro">
                <div className="intro-body">
                    <h1 className="brand-heading">Landscape</h1>
                    <p className="intro-text">All the photographs taken by
                        <br/>enthusiastic amateur photographer, Ben Kim.</p>
                    <a href="#about" className="btn btn-circle page-scroll">
                        <i className="fa fa-angle-double-down animated"></i>
                    </a>

                </div>
            </header>
        )
    }
}

export default Header;
