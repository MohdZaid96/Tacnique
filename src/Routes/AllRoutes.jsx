import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Users from '../Components/Users'
import AddUser from '../Components/AddUser'
import EditUser from '../Components/EditUser'
import DeleteUser from '../Components/DeleteUser'


const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' Component={Users} />
        <Route path='/add-user' Component={AddUser} />
        <Route path='/edit-user' Component={EditUser} />
        <Route path='/delete-user' Component={DeleteUser} />
    </Routes>
  )
}

export default AllRoutes