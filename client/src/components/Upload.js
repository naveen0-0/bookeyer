import React,{ useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import Modal from 'react-modal';

export default function Upload() {

    const [ file, setFile ] = useState(null);
    const [ uploaded, setUploaded ] = useState(false);
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const changeHandler = e => {
        setFile(e.target.files[0])
    }

    const bookUpload = e => {
        e.preventDefault();
        const data = new FormData();
        data.append('file',file)
        axios.post('/upload',data).then(res=>{
            setUploaded(res.data)
            setIsModalOpen(true);
        })
    }

    const CloseModal = () => {
        setIsModalOpen(false);
        setFile(null)
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
                    className="uploadform"
                    >
                    <input type="file" name="file" id="file" required className="uploadfile"/>
                    <input type="submit" value="Upload" className="uploadbutton"/>

                    <Modal isOpen={isModalOpen} className="modal">
                        <div >
                            <div className="doneText">Uploaded Successfully</div>
                            <button onClick={CloseModal} className="done">Done</button>
                        </div>
                    </Modal>

                </form>
            </div>
        </div>
    )
}
