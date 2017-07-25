import React, {Component} from 'react';
import "../../../css/grayscale.min.css";
import "../../../css/bootstrap.min.css";


class Footer extends Component{
    render(){
        return(
            <footer>
                <div className="col-xs-2">
                    <div className="text-left">
                    <a href="http://www.hitwebcounter.com" target="_blank">
                        <img src="http://hitwebcounter.com/counter/counter.php?page=6454432&style=0038&nbdigits=6&type=page&initCount=0" title="url and counting visits" Alt="url and counting visits"   border="0"/>
                    </a>
                        <br/>
                    </div>
                </div>
                <div className="col-xs-8">
                    <div className="container text-center">
                        <p>&copy; 2016 BenKimLandscape.com, all rights reserved.</p>

                    </div>
                </div>
                <div className="col-xs-1">

                </div>
    </footer>
        )
    }
}

export default Footer;