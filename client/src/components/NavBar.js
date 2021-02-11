import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {

    return (
        <header>
            <div className="head">
                <Link className="title" to="/">Bookeyer</Link>
                <Link to="/books" className="link">Books</Link>
                <Link to="/videos" className="link">videos</Link>
            </div>
        </header>
    )
}