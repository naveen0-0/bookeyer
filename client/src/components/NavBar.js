import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function NavBar() {

    const user = useSelector(state=>state.user)

    return (
        <header>
            <div className="title">Bookeyer</div>
                {user.username ?
                    <div className="links">
                        <Link to="/user"><img src={require('../images/person.png')} alt="User" className="person"/></Link>
                    </div>
                    :
                    <div className="links">
                        <Link to="signup" className="link">Signup</Link>
                        <Link to="login" className="link">Login</Link>
                    </div>
                }
        </header>
    )
}
