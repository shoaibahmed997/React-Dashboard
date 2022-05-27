import React from 'react'
import { Link } from 'react-router-dom'
import {FiHome} from 'react-icons/fi'
// import {RiBillLine} from 'react-icons/ri'
import {BsPeople} from 'react-icons/bs'
import {GrTransaction} from 'react-icons/gr'
import Heading from './Heading'
const Header = () => {
  return (
    <div className='mt-8'>
        <div>
           <Heading title={'Discover'} />
        </div>
        <div className='mt-4'>
            <ul className='flex flex-col gap-4'>
                <Link className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/'>
                    <FiHome size='20px'  />
                    <span className='ml-3'> Home</span>
                </Link>
                {/* <Link className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/'>
                    <RiBillLine size='20px' />
                    <span className='ml-3'> Billings</span>
                </Link> */}
                <Link className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/transactions'>
                    <GrTransaction size='20px' />
                    <span className='ml-3'> Transactions</span>
                </Link>
                <Link className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/clients'>
                    <BsPeople size='20px' />
                    <span className='ml-3'> Clients</span>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Header