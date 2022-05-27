import React from 'react'
import { Navigate, Outlet, useLocation } from 'react-router-dom'
import useAuth from '../Hooks/useAuth'

const RequireAuth = () => {
    let UserState = useAuth()
    let logged = false
    if (UserState.user.firstname && UserState.user.lastname){
      logged = true
    }
    let location = useLocation()
  return logged ? <Outlet /> : <Navigate to='/login' state={{from:location}} replace  />
  
}

export default RequireAuth