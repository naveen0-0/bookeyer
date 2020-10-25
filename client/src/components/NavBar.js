import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <header>
            <div className="title">Bookeyer</div>
            <div className="links">
                <Link to="signup" className="link">Signup</Link>
                <Link to="login" className="link">Login</Link>
            </div>
        </header>
    )
}
