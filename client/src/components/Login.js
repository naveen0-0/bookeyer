import React,{ useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

export default function Login() {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ msg, setMsg ] = useState("");
    const [ loggedIn, setLoggedIn ] = useState(false);

    const LoginSubmit = async e => {
        e.preventDefault();
        let { data } = await axios.post('/login',{ username, password })
        setMsg(data.message)
        setLoggedIn(data.loggedin)
    }

    if(loggedIn){
        return <Redirect to="/"/>
    }

    return (
        <div>
            <div className="logintitle">Login to Bookeyer</div>
            <div className="msg">{msg}</div>
            <form className="loginform" onSubmit={LoginSubmit}>
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)} required className="loginusername" placeholder="Enter your Username"/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="loginpassword" placeholder="Enter your Password"/>
                <input type="submit" value="Login" className="loginbutton"/>
            </form>
        </div>
    )
}
