import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const SignIn = () => {
    const email = useRef()
    const password = useRef()



    const handleSignIn = () => {
        if(email.current.value || password.current.value) {
            
        }
    }

    return (
        <div className='signupmainDiv'>
           <h1>SignInPage</h1> 
           <div>
            <input type="email" placeholder='User Email' ref={email} />
           </div>
           <div>
            <input type="password" placeholder='Password' ref={password} />
           </div>
           <div>
            <button className='sigInbutton' onClick={handleSignIn}><Link to="/homepage" id='sin' >SignIn</Link></button> 
           </div>
        </div>
    )
}

export default SignIn
