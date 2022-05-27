import React,{useState} from 'react'
import Heading from '../Components/Heading'
import {RiAddFill} from 'react-icons/ri'
import ClientTable from '../Components/ClientTable'
import AddClient from '../Components/AddClient'
import UpdateClient from '../Components/UpdateClient'

const ClientPage = () => {

  const [modes, setModes] = useState(0);


  return (
    <div className={`grid`}>
          {/* start */}
    <div className='bg-primary-white pl-4'>
        <div>
            <div className='mt-4 text-3xl '>
                <Heading title={"All Clients"} />
            </div>
            <p className='text-sm text-slate-500'>Manage all Clients at one place</p>
        </div>

        {/* History and upcomming  */}
        <div className='mt-6'>
            <div className='flex items-center gap-6'>
                <div onClick={()=>setModes(prev=>0)} className='hover:cursor-pointer hover:text-primary-green-dark hover:font-extrabold'>Client Details</div>
                <div className=' bg-primary-purple-light p-1 rounded-md hover:cursor-pointer hover:scale-[1.1] transition-all'>
                    <RiAddFill fontSize='20px' className='text-white' onClick={()=>setModes(prev=>1)} />
                </div>
            </div>
            {/* horizontal line */}
            <div className='mt-1 w-full border-2 border-dashed h-1'></div>
        </div>

        {/* Transaction Table  */}

        <div className='w-full mt-4'>
        {modes===0 ? 
            
            <ClientTable setModes={setModes}  />: modes===1 ?
              <AddClient />: <UpdateClient setModes={setModes} />
        }
        </div>

    </div>
       
             
{/* END */}
        </div>
  )
}

export default ClientPage