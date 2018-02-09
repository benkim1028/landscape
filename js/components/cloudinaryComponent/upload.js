import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import "../../../css/bootstrap.min.css";
var cloudinary = require('cloudinary-core');

class Images extends Component {

    constructor(){
        super();
        this.state = {
            images: [],
            // testing: cloudinary.v2.api.resources({type: 'upload'}, function(error, result){})
        }
    }

    uploadFile(files) {
        console.log('uploadFile: ' + files);
        const image = files[0];

        const cloudName ="benkim1028";
        const url ="https://api.cloudinary.com/v1_1/"+ cloudName +"/image/upload";

        const timestamp = Date.now()/1000;
        const uploadPreset = "e5nfizwn";

        const paramsStr = "timestamp="+timestamp+"&upload_preset="+uploadPreset+"Ay-Cg8UvhgxslhaJHI1zmWRKCTc";
        const signature = sha1(paramsStr);
        const params ={
            'api_key': "762335636627252",
            'timestamp': timestamp,
            'upload_preset' : uploadPreset,
            'signature' : signature
        };
        let uploadRequest = superagent.post(url);
        uploadRequest.attach('file', image);

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        });

        uploadRequest.end((err, res) => {
            if (err) {
                alert(err);
                return
            }
            console.log("UPLOAD COMPLETE: "+ JSON.stringify(res.body));
            const uploaded = res.body;

            //copied the images from the states and rerender.
            let updatedImages = Object.assign([], this.state.images);
            updatedImages.push(uploaded);

            this.setState({
                images: updatedImages
            })
        })
    }

    render() {
        // const list = this.state.images.map((image, i) => {
        //     return (
        //         <div key ={i} className="col-sm-4">
        //             <img src={image.secure_url} className="img-responsive"/>
        //         </div>
        //     )
        // });
        return (
            <div className="container-fluid content-section">
                <h3>Images Components</h3>
                <Dropzone onDrop={this.uploadFile.bind(this)}>Drop photos here!</Dropzone>
                {/*<div>*/}
                    {/*{list}*/}
                {/*</div>*/}
            </div>
        )
    }
}
export default Images;