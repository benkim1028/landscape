import React, {Component} from 'react';
import "../../../css/grayscale.min.css";
import "../../../css/bootstrap.min.css";

class Contact extends Component {
    render(){
        return (
            <section id="contact" className="container-fluid content-section text-right">
                <div className="col-xs-1">
                </div>
                <div className="col-xs-4"><img src="img/gif2.gif" className="img-responsive"/>
                </div>
                <div className="col-xs-6">
                    <h2>Ben Kim Landscape Photography</h2>
                    <p>Phone: 778 792 1925
                        <br/>Email: <a href="mailto:benkim1028@benkimlandscape.com">benkim1028@benkimlandscape.com</a>
                    </p>
                    <p>Ben Kim
                        <br/>104-6090 Iona Drive
                            <br/>Vancouver BC Canada
                                <br/>V6T 0B6
                    </p>
                </div>
            </section>
        )
    }
}

export default Contact;