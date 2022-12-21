import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Login from '../Pages/Login'
import Register from '../Pages/Register'

const AllRoutes = () => {
  return (
    <Routes>
      <Route  to="/" element={<Register />}/>
      <Route  to="/login" element={<Login />}/>
    </Routes>
  )
}

export default AllRoutes
