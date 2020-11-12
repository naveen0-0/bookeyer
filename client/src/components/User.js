import React, { useState,Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Axios from 'axios';

export default function User() {

    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    const [ loggedOut, setLoggedOut ] = useState(false);

    const GETUSER = async () => {
        let { data } = await Axios.get('/getuser');
        dispatch({type:"UPDATE_USER",payload:data})
    }


    const LogOut = async () => {
        let { data } = await Axios.post('/logout');
        setLoggedOut(data.loggedout)
    }

    if (!user.username) {
        return <Redirect to="/" />
    }

    if(loggedOut){
        GETUSER();
    }

    return (
        <Fragment>
            <div className="userinfo">
                <div className="dp"><img src={require('../images/user.png')} alt="UserDP" /></div>
                <div className="info">
                    <div>Username : {user.username}</div>
                    <div>Email : {user.email}</div>
                    <div>No of books Uploaded : 0</div>
                    <div>No of books Downloaded : 0</div>
                </div>
            </div>
            <div className="buttons">
                <Link to="/" className="button">Home</Link>
                <button className="button" onClick={LogOut}>LogOut</button>
            </div>
        </Fragment>
    )
}
