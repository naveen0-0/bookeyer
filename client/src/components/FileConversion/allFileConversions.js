import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const allFileConversions = () => {
    return (
        <Fragment>
            <div className="booksHead">Select the one you want</div>
            <div className="allfileconversions">
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
                <Link className="fileconversion" to="/pdf-to-docx">Pdf to Docx</Link>
            </div>
        </Fragment>
    )
}

export default allFileConversions;
