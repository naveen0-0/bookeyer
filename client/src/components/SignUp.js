import React, { useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default function SignUp() {

    const user = useSelector(state => state.user)

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [msg, setMsg] = useState("");

    const SignUpSubmit = async e => {
        e.preventDefault();
        if (password === confirmPassword) {
            let { data } = await axios.post('/signup',
                { username, email, password })
            setMsg(data.message)
        }
        else {
            setMsg("Password didn't match")
        }
    }

    if (user.username) {
        return <Redirect to="/" />
    }

    return (
        <div>
            <div className="signuptitle">Sign up to Bookeyer</div>
            <form className="signupform" onSubmit={SignUpSubmit}>
                <div className="msg">{msg}</div>
                <input
                    type="text"
                    value={username}
                    className="username"
                    placeholder="Enter your Username"
                    onChange={e => setUsername(e.target.value)}
                    required
                />
                <input
                    type="email"
                    value={email}
                    className="email"
                    placeholder="Enter your Email"
                    onChange={e => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={password}
                    className="password"
                    placeholder="Enter your Password"
                    onChange={e => setPassword(e.target.value)}
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    className="confirmPassword"
                    placeholder="Confirm your Password"
                    onChange={e => setConfirmPassword(e.target.value)}
                    required
                />
                <input type="submit" value="Sign Up" className="signupbutton" />
            </form>
        </div>
    )
}
