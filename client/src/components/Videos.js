import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';
import { saveAs } from 'file-saver';

export default function Videos() {

    const [available, setAvailale] = useState(false);
    const [books, setBooks] = useState([])

    const getBooks = async () => {
        let { data } = await Axios.get('/books');
        setBooks(data)
        setAvailale(true)
        console.log(data);
    }


    useEffect(() => {
        getBooks();
    }, [])

    const downloadBook = async (filename, contentType) => {
        let { data } = await Axios.get(`/books/${filename}`, { responseType: 'blob' })
        const pdfblob = new Blob([data], { type: `${contentType}` });
        saveAs(pdfblob, `${filename}`)
    }

    if (!available) {
        return <div className="spinner"><img src={require('../images/loading.svg')} alt="Loading" /></div>
    }

    return (
        <Fragment>
            <div className="booksHead">Available Videos</div>
            <div className="books">
                {books.map(book => {
                    if (book.contentType === "video/mp4") {
                        return (
                            <video key={book._id} className="book" controls>
                                <source src={`/books/${book.filename}`}></source>
                            </video>
                        )
                    }
                })}
            </div>
        </Fragment>
    )
}