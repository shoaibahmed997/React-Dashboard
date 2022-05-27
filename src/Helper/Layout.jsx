import React from 'react'
import { Outlet } from 'react-router-dom'
import LeftNav from '../Components/LeftNav'
// import RightNav from '../Components/RightNav'
const Layout = () => {
  return (
    <main className='App'>
        <LeftNav></LeftNav>
        <Outlet></Outlet>
        {/* <RightNav></RightNav> */}
    </main >
  )
}

export default Layout