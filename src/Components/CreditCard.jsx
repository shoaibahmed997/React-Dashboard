import React from 'react'
import {SiVisa} from 'react-icons/si'
import Heading from './Heading'

const CreditCard = ({user}) => {
  return (
    <div>
            <Heading title={"Your Card"} />

        <div >
            <div style={{background:"linear-gradient(to bottom, #ff6767, #ff4545)"}} className='rounded-md overflow-hidden mx-2 mt-4 h-44'>
                <div className='w-full h-full'>
                    <div className=' relative z-10 text-primary-white ml-5 font-mono'>
                            <div className='flex justify-between'>
                                <div className='mt-5'>
                                   <img src="/chip.png" alt="chip" width='40px' heigth='40px' className='rounded-md' />

                                </div>
                                <div className='mr-8'>
                                    <SiVisa size='4.5rem' />
                                </div>
                            </div>
                            <div className='mt-2'>
                                <h1 className=' font-semibold '> 
                                    <span className='tracking-[.2em]'> 5400</span>
                                    <span className='tracking-[.2em]'> 2022</span>
                                    <span className='tracking-[.2em]'> 0054</span>
                                    <span className='tracking-[.2em]'> 2202</span>
                                </h1>
                            </div>
                            <div className='mt-4 flex justify-between'>
                                <div className='flex flex-col'>
                                <h1 className='text-gray-300 text-xs text-gray'>Card Holder</h1>
                                <h1 className='font-semibold'> {user.firstname} {user.lastname} </h1>
                                </div>
                                <div className='flex flex-col mr-8'>
                                <h1 className='text-gray-300 text-xs'>Expiry Date</h1>
                                <h1 className='font-semibold'> 01/2030 </h1>
                                </div>
                            </div>
                    </div>
                </div>
                <div style={{background:"linear-gradient(to right, #111, #555)"}} className='relative -top-44 w-full h-full skew-x-[26deg] -translate-x-[6.25rem]'></div>
            </div>
        </div>
    </div>
  )
}

export default CreditCard