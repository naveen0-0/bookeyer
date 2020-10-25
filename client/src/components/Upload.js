import React,{ useState } from 'react';
import axios from 'axios';

export default function Upload() {

    const [ file, setFile ] = useState(null);

    return (
        <div className="uploading">
            <div><img src={require('../images/uploadred.svg')} alt="Upload" className="uploadingimg" /></div>
            <div className="form">
                <div className="formhead">Upload a Book or Pdf</div>
                <form 
                    method="POST" 
                    encType="multipart/form-data"
                    action="/upload"
                    >
                    <input type="file" name="file" id="file" required/>
                    <input type="submit" value="Upload" />
                </form>
            </div>
        </div>
    )
}
