import React, { useState } from 'react'

export default function SignUp() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    return (
        <div>
            <div className="signuptitle">Sign up to Bookeyer</div>
            <form className="signupform">
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
