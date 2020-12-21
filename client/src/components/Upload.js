import React, { useState } from 'react';
import axios from 'axios';


export default function Upload() {

    const [ uploaded, setUploaded ] = useState(false)
    const [file, setFile] = useState(null);

    const changeHandler = e => {
        setFile(e.target.files[0])
    }

    const bookUpload = async e => {
        e.preventDefault();
        const book = new FormData();
        book.append('file', file)
        let { data } = await axios.post('/upload', book);
        setUploaded(data.uploaded)
        setFile(null)
    }

    const hideUploadDone = () => {
        const uploadDone = document.querySelector(".uploadDone");
        uploadDone.classList.remove("uploadDoneShow")
    }

    if(uploaded){
        const uploadDone = document.querySelector(".uploadDone");
        uploadDone.classList.add("uploadDoneShow")
    }


    return (
        <div className="uploading">
            <div><img src={require('../images/uploadred.svg')} alt="Upload" className="uploadingimg" /></div>
            <div className="form">
                <div className="formhead">Upload a Book or Pdf</div>
                <form method="POST" encType="multipart/form-data" onSubmit={bookUpload} onChange={changeHandler} className="uploadform">
                    <input type="file" name="file" id="file" required className="uploadfile" />
                    <input type="submit" value="Upload" className="uploadbtn" />
                </form>

                <div className="uploadDone">
                    <div className="success">Uploaded Success</div>
                    <button className="success-btn" onClick={hideUploadDone}>Done</button>
                </div>

            </div>
        </div>
    )
}
