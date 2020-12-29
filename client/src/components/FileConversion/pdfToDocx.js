import React, { useState, Fragment } from 'react';
import axios from 'axios';

const PdfToDocx = () => {
    const [file, setFile] = useState(null);

    const changeHandler = e => {
        setFile(e.target.files[0])
        console.log((e.target.files[0]));
    }

    const pdfUpload = async e => {
        e.preventDefault();
        const pdf = new FormData();
        pdf.append('file', file)
        let { data } = await axios.post('/pdf-to-docx', pdf);
        setFile(null)
    }

    return (
        <Fragment>
            <div className="booksHead">Upload a pdf file</div>
            <form
                method="POST"
                encType="multipart/form-data"
                onSubmit={pdfUpload}
                onChange={changeHandler}
                className="pdftodocxform">

                <input
                    type="file"
                    name="file"
                    id="file"
                    required
                    className="pdftodocxfile"
                    accept="application/pdf" />

                <input
                    type="submit"
                    value="Upload"
                    className="pdftodocxbtn" />
            </form>
        </Fragment>
    )
}

export default PdfToDocx;
