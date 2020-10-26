import React,{ useState } from 'react'

export default function Login() {

    const [ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");

    return (
        <div>
            <div className="logintitle">Login to Bookeyer</div>
            <form className="loginform">
                <input type="text" value={username} onChange={e=>setUsername(e.target.value)} required className="loginusername" placeholder="Enter your Username"/>
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} required className="loginpassword" placeholder="Enter your Password"/>
                <input type="submit" value="Login" className="loginbutton"/>
            </form>
        </div>
    )
}
