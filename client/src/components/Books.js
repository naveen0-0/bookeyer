import React,{ useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { saveAs } from 'file-saver';

export default function Books() {

    const [ available, setAvailale ] = useState(false);
    const [ books, setBooks ] = useState([])

    const getBooks = async () => {
        let { data } = await Axios.get('/books');
        console.log(data);
        setBooks(data)
        setAvailale(true)
    }


    useEffect(()=>{
        getBooks();
    },[])

    const downloadBook = async (filename,contentType) => {
        let { data } = await Axios.get(`/books/${filename}`,{ responseType:'blob'})
        const pdfblob = new Blob([data],{type:`${contentType}`});
        saveAs(pdfblob,`${filename}`)
    }

    if(!available){
        return <div>Nothing</div>
    }

    return (
        <div className="nopotd">
            {books.map(book=>(
                <div key={book._id}>
                    <button onClick={()=>downloadBook(book.filename,book.contentType)} className="getBook">Download</button>
                </div>
            ))}
        </div>
    )
}
