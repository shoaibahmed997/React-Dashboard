import React from 'react'
import {FiTarget} from 'react-icons/fi'
import {FaFileInvoiceDollar} from 'react-icons/fa'
import {AiOutlineRight} from 'react-icons/ai'
import {GiExpense} from 'react-icons/gi'
import Heading from './Heading'
const Reports = () => {
  return (
    <div>
        <div>
                <Heading title={'Your Report'} />
        </div>
        <div className='flex flex-col gap-1 mt-2'>
            <div className='grid grid-cols-[0.2fr_4fr_0.7fr] items-center hover:cursor-pointer hover:bg-primary-orange-light transition-all p-2 rounded-md'>
                    <FiTarget fontSize='25px' />
                    <h1 className='ml-4 text-md '>Goals</h1>
                    <AiOutlineRight fontSize='18px' className='' />
            </div>
            <div className='grid grid-cols-[0.2fr_4fr_0.7fr] items-center hover:cursor-pointer hover:bg-primary-orange-light transition-all p-2 rounded-md'>
                    <GiExpense fontSize='25px' />
                    <h1 className='ml-4 text-md '>Monthly Expenses</h1>
                    <AiOutlineRight fontSize='18px' className='' />
            </div>
            <div className='grid grid-cols-[0.2fr_4fr_0.7fr] items-center hover:cursor-pointer hover:bg-primary-orange-light transition-all p-2 rounded-md'>
                    <FaFileInvoiceDollar fontSize='25px' />
                    <h1 className='ml-4 text-md '>Income Invoice</h1>
                    <AiOutlineRight fontSize='18px' className='' />
            </div>
        </div>
    </div>
  )
}

export default Reports