import React, { useRef } from 'react'
import "./SignIn.module.css"

const SignIn = () => {
    const email = useRef()
    const password = useRef()

    const handleclick = () => {
        if(email.current.value || password.current.value) {
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('SignIn', email.current.value)
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
            <button onClick={handleclick}>SignIn</button> 
           </div>
        </div>
    )
}

export default SignIn
