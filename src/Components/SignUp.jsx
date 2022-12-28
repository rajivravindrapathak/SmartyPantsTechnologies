import React, { useEffect, useRef, useState } from 'react'
import HomePage from './HomePage'
import "./SignUp.module.css"

const SignUp = () => {
    const email = useRef()
    const fname = useRef()
    const lname = useRef()
    const password = useRef()

    const [data, setData] = useState(false)

    const item = localStorage.getItem('SignUp')

    useEffect = () => {
        if(item) {
            setData(true)
        }
    }

    const handleclick = () => {
        if(email.current.value || password.current.value) {
            localStorage.setItem('email', email.current.value)
            localStorage.setItem('fname', fname.current.value)
            localStorage.setItem('lname', lname.current.value)
            localStorage.setItem('password', password.current.value)
            localStorage.setItem('SignUp', email.current.value)
            window.location.reload()
            alert('SignUp account created successful')
        }
    }

    return (
        <div>
            <h1>SignUp Page</h1>
            {data?<HomePage/>:
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
                        <button onClick={handleclick}>SignUp</button> 
                    </div>
                </div>
            }
        </div>
    )
}

export default SignUp
