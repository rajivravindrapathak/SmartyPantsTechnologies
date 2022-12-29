import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

const SignIn = () => {
    const email = useRef()
    const password = useRef()

    const [show, setShow] = useState(false)
    const localemail = localStorage.getItem('email')
    const localpassword = localStorage.getItem('password')

    useEffect(() => {
        if(localemail) {
            setShow(true)
        }
    })

    const handleSignIn = () => {
        if(email.current.value === localemail && password.current.value === localpassword) {
            localStorage.setItem('SignUp', email.current.value)
            window.location.reload()
        } else {
            alert('please create account enter valid credetial')
        }
    }

    return (
        <div className='signupmainDiv'>
           <h1>SignInPage</h1> 
           {show?
           <div>
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
           :<SignUp />}
        </div>
    )
}

export default SignIn
