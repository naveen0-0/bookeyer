import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { saveAs } from 'file-saver';

export default function Books() {

    const getBook = async () => {
        let { data } = await Axios.get('/books/914045f0083c7c335cd3331136e5c110.pdf',{ responseType:'blob'})
        const pdfblob = new Blob([data],{type:"application/pdf"});
        saveAs(pdfblob,'newPdf.pdf')
    }


    return (
        <div className="nopotd">
            <button onClick={getBook} className="getBook">Download</button>
        </div>
    )
}
