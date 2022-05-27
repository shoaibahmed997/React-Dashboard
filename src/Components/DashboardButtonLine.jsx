import React from 'react'
import {FaHistory,FaBalanceScale} from 'react-icons/fa'
import {GiWallet,GiTakeMyMoney , GiPayMoney} from 'react-icons/gi'
import Heading from './Heading'
const DashboardButtonLine = () => {
  return (
    <div className='mt-4 flex gap-8 px-4 justify-evenly rounded-md bg-primary-green-light text-primary-heading'>
        <div className='flex items-center gap-1 p-2 transition-all rounded-md hover:cursor-pointer hover:scale-[.9] hover:bg-primary-green-dark'>
                <FaHistory fontSize='20px'  />
                <Heading title={"History"} />
        </div>
        <div className='flex items-center gap-1 p-2 transition-all rounded-md hover:cursor-pointer hover:scale-[.9] hover:bg-primary-green-dark'>
                <GiWallet fontSize='20px' />
               <Heading title={"Expenses"} />
        </div>
        <div className='flex items-center gap-1 p-2 transition-all rounded-md hover:cursor-pointer hover:scale-[.9] hover:bg-primary-green-dark'>
                <FaBalanceScale fontSize='20px' />
                <Heading title={"Balance"} />
        </div>
        <div className='flex items-center gap-1 p-2 transition-all rounded-md hover:cursor-pointer hover:scale-[.9] hover:bg-primary-green-dark'>
                <GiTakeMyMoney fontSize='20px' />
                <Heading title={"Revenue"} />
        </div>
        <div className='flex items-center gap-1 p-2 transition-all rounded-md hover:cursor-pointer hover:scale-[.9] hover:bg-primary-green-dark'>
                <GiPayMoney fontSize='20px' />
                <Heading title={"Spent"} />
        </div>
    </div>
  )
}

export default DashboardButtonLine