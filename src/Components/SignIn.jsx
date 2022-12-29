import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import "./SignIn.module.css"

const SignIn = () => {
    const email = useRef()
    const password = useRef()



    const handleSignIn = () => {
        if(email.current.value || password.current.value) {
            
        }
    }

    return (
        <div>
           <h1>SignInPage</h1> 
           <div>
            <input type="email" placeholder='User Email' ref={email} />
           </div>
           <div>
            <input type="password" placeholder='Password' ref={password} />
           </div>
           <div>
            <button onClick={handleSignIn}><Link to="/homepage" id='sin' >SignIn</Link></button> 
           </div>
        </div>
    )
}

export default SignIn
