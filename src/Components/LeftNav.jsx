import React from 'react'
import ClientList from './ClientList'
import Header from './Header'

const LeftNav = () => {
  return (
    <div className='bg-primary-orange-dark'>
      <div>
        <h1 className=' text-center mt-4 font-bold text-2xl text-primary-heading'>Dashboard</h1>
      </div>
      <div className='ml-4'>
        <Header />
        <ClientList />
      </div>
    </div>
  )
}

export default LeftNav