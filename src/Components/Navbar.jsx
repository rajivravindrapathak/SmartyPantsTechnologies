import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.module.css'

const Navbar = () => {
    return (
        <div className='nav'>
            <button className='navbutton'><Link id='sinup' to="signup">SignUp</Link> </button>
            <button className='navbutton'><Link id='sinin' to="signin" >SignIn</Link></button>
        </div>
    )
}

export default Navbar
