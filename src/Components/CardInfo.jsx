import React from 'react'
import Heading from './Heading'
import useBalance from '../Hooks/useBalance'

const CardInfo = () => {

    const balance = useBalance()
  return (
    <div className=''>
        <div>
                <Heading title={"Card Info"} />
        </div>
        <div className='mt-4 flex flex-col gap-4'>
            <div className=' flex justify-between text-sm'>
                <h1 className=' text-slate-500' >Card Number</h1>
                <h1 className='text-primary-heading font-semibold'>5400 ****</h1>
            </div>
            <div className=' flex justify-between text-sm'>
                <h1 className='text-slate-500' >Balance</h1>
                <h1 className='text-primary-heading font-semibold'>${balance.toLocaleString()}</h1>
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-slate-500' >Currency</h1>
                <h1 className='text-primary-heading font-semibold'>USD</h1>
            </div>
            <div className='flex justify-between text-sm'>
                <h1 className='text-slate-500' >Card Status</h1>
                <h1 className='text-primary-heading font-semibold'>01/30 (Active) </h1>
            </div>
        </div>

        <div className='mt-4 border-t-[1px] border-slate-400 border-dashed'></div>
    </div>
  )
}

export default CardInfo