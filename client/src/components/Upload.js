import React,{ useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Upload() {

    const [ file, setFile ] = useState(null);
    const [ uploaded, setUploaded ] = useState(false)

    const changeHandler = e => {
        setFile(e.target.files[0])
    }

    const bookUpload = e => {
        e.preventDefault();
        const data = new FormData();
        data.append('file',file)
        axios.post('/upload',data).then(res=>{
            setUploaded(res.data)
        })
        setFile(null)
    }

    if(uploaded){
        return <Redirect to="/"/>
    }

    return (
        <div className="uploading">
            <div><img src={require('../images/uploadred.svg')} alt="Upload" className="uploadingimg" /></div>
            <div className="form">
                <div className="formhead">Upload a Book or Pdf</div>
                <form 
                    method="POST" 
                    encType="multipart/form-data"
                    onSubmit={bookUpload}
                    onChange={changeHandler}
                    >
                    <input type="file" name="file" id="file" required/>
                    <input type="submit" value="Upload" />
                </form>
            </div>
        </div>
    )
}
