import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Axios from 'axios';

export default function NavBar() {

    const user = useSelector(state => state.user )

    const [loggedOut, setLoggedOut] = useState(false)
    const dispatch = useDispatch();

    const GetUser = async () => {
        let { data } = await Axios.get('/getuser');
        dispatch({ type: "UPDATE_USER", payload: data })
    }

    if (loggedOut) {
        GetUser();
    }

    const LogOut = async () => {
        let { data } = await Axios.post('/logout')
        setLoggedOut(data.loggedout)
    }

    return (
        <header>
            <div className="title">Bookeyer</div>
                {user.username ?
                    <div className="links">
                        <p className="link">{user.username}</p>
                        <button onClick={LogOut} className="link">Logout</button>
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
