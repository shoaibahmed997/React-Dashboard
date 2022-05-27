import React from 'react'
import useAuth from '../Hooks/useAuth'
import CardInfo from './CardInfo'
import CreditCard from './CreditCard'
import Reports from './Reports'
import User from './User'

const RightNav = () => {
  const userState = useAuth()
  
  return (
    <div className=' bg-primary-orange-dark px-2'>
      <div>
        <User user={userState.user}/>
      </div>

      <div className='mt-4'>
        <CreditCard user={userState.user} />
      </div>
      <div className="mt-4">
        <CardInfo />
      </div>
      <div className='mt-4'>
        <Reports />
      </div>
    </div>
  )
}

export default RightNav