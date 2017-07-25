import React, {Component} from 'react';
import "../../../css/grayscale.min.css";
import "../../../css/bootstrap.min.css";

class About extends Component{
    render(){
        return(
            <section id="about" className="container-fluid content-section text-left">
                <div className="row">
                    <div className="col-xs-1">
                    </div>
                    <div className="col-xs-6">
                        <h2>About Ben Kim</h2>
                        <p>Ben Kim (born 28 October 1994) is a Korean undergraduate student, front-end developer,
                            <br/> fingerstyle guitarist, and enthusiastic amateur landscape photographer. </p>

                        <p>To get more information about Ben Kim's career, visit <a href="http://linkedin.com/in/benkim1028/"> Linkedin</a>.
                            <br/>To get more personal information of Ben Kim, visit<a href="http://facebook.com/benkim1028/"> Facebook</a>. </p></div>
                    <div className="col-xs-4"><img src="img/gif1.gif" className="img-responsive"/></div>
                </div>
            </section>
            )
        }
}

export default About;