import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../Components/Users'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Users} />
        
    </Routes>
  )
}

export default AllRoutes