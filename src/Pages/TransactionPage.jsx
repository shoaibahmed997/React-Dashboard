import React,{useState} from 'react'
import Heading from '../Components/Heading'
import {RiAddFill} from 'react-icons/ri'
import TransactionTable from '../Components/TransactionTable'
import TransactionDetails from '../Components/TransactionDetails'
import AddTransaction from '../Components/AddTransaction'

const TransactionPage = () => {

  const [details, setdetails] = useState(false);

  return (
    <div className={`grid grid-cols-[2.5fr_1fr] `}>
          {/* start */}
    <div className='bg-primary-white pl-4'>
        <div>
            <div className='mt-4 text-3xl '>
                <Heading title={"Transactions"} />
            </div>
            <p className='text-sm text-slate-500'>See all your Transactions at one place</p>
        </div>

        {/* History and upcomming  */}
        <div className='mt-6'>
            <div className='flex items-center gap-6'>
                <div className='hover:cursor-pointer hover:text-primary-green-dark'>History</div>
                <div className='hover:cursor-pointer hover:text-primary-green-dark'>Upcoming</div>
                <div className=' bg-primary-green-dark p-1 rounded-md hover:cursor-pointer hover:scale-[1.1] transition-all'>
                    <RiAddFill fontSize='20px' className='text-white' onClick={()=>setdetails(false)} />
                </div>
            </div>
            {/* horizontal line */}
            <div className='mt-1 w-full border-2 border-dashed h-1'></div>
        </div>

        {/* Transaction Table  */}

        <div className='w-full mt-4'>
            <TransactionTable setdetails={setdetails}  />
        </div>

    </div>
        {/* Details tab */}
        <div className=' bg-primary-orange-dark px-2'>
            {details ? (<>  
                <TransactionDetails  />
            </>)
              :
               <AddTransaction />
               }
        </div>
{/* END */}
        </div>
  )
}

export default TransactionPage