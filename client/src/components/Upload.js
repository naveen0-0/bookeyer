import React from 'react'

export default function Upload() {
    return (
        <div className="uploading">
            <div><img src={require('../images/uploadred.svg')} alt="Upload" className="uploadingimg" /></div>
            <div className="form">
                <div className="formhead">Upload a Book or Pdf</div>
                <form>
                    <input type="file" name="file" id="file" required/>
                    <input type="submit" value="Upload" />
                </form>
            </div>
        </div>
    )
}
