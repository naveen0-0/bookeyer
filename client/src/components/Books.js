import React, { useState, useEffect, Fragment } from 'react';
import Axios from 'axios';
import { saveAs } from 'file-saver';

export default function Books() {

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
        return <div>Nothing</div>
    }

    return (
        <Fragment>
        <div className="booksHead">Download the Available Books</div>
            <div className="books">
                {books.map(book => (
                    <div key={book._id} className="book">
                        <div className="name">{book.filename}</div>
                        <button onClick={() => downloadBook(book.filename, book.contentType)} className="download">Download</button>
                    </div>
                ))}
            </div>
        </Fragment>
    )
}
