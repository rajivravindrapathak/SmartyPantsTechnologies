import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Navbar from './Navbar'
import SignIn from './SignIn'
import SignUp from './SignUp'

const AllRoutes = () => {
    return (
        <>
        <Navbar />
    
        <Routes>
          <Route path='/signup' element={<SignUp />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/signin' element={<SignIn />} />
         
        </Routes>
        </>
    )
}

export default AllRoutes
