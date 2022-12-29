import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import HomePage from './HomePage'

const SignUp = () => {
    const email = useRef()
    const fname = useRef()
    const lname = useRef()
    const password = useRef()

    const [showHome, setShowHome] = useState(false)

    const localsignup = localStorage.getItem('SignUp')

    useEffect (() => {
        if(localsignup) {
            setShowHome(false)
        }
    })

    const handleclick = () => {
        if(email.current.value && fname.current.value && lname.current.value
            && password.current.value) {
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('fname', fname.current.value)
            localStorage.setItem('lname', lname.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('repeatpassword', password.current.value)
            localStorage.setItem('SignUp', email.current.value)
            window.location.reload()
            alert('SignUp account created successful')
        }
    }

    return (
        <div className='signupmainDiv'>
            <h1>Create account</h1>
            <p>Aleady have account? <Link to="/signin" id='sin'>Sign In</Link></p>
            {showHome?<HomePage/>:
                <div>
                    <div>
                        <input type="email" placeholder='User Email' ref={email} />
                    </div>
                    <div>
                        <input type="name" placeholder='First Name' ref={fname} />
                    </div>
                    <div>
                        <input type="name" placeholder='Last Name' ref={lname} />
                    </div>
                    <div>
                        <input type="password" placeholder='Password' ref={password} />
                    </div>
                    <div>
                        <input type="password" placeholder='Repeat Password' ref={password} />
                    </div>
                    <div>
                    <button className='sigUpbutton' onClick={handleclick}><Link className='sigUpbutton' to="/homepage" id='lin' >SignUp</Link></button> 
                    </div>
                </div>
            }
        </div>
    )
}

export default SignUp
