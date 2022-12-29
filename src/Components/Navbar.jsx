import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='nav'>
            <button className='navbutton'><Link id='sinup' to="signup">SignUp</Link> </button>
            <button className='navbutton'><Link id='sinin' to="signin" >SignIn</Link></button>
        </div>
    )
}

export default Navbar
