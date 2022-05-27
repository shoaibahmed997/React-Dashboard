import React from 'react'
import { Link } from 'react-router-dom'
import {BsPersonLinesFill} from 'react-icons/bs'
import { Avatar } from '@mui/material'
import {FaUserPlus} from 'react-icons/fa'
import Heading from './Heading'
import useClients from '../Hooks/useClients'

const ClientList = () => {

    let allclients = useClients()

  return (
    <div className='mt-8'>
        <div>
             <Heading title={"Client List"} />
        </div>
        <div className='mt-4'>
            <ul className='flex flex-col font-thin gap-4'>
                {allclients && allclients.slice(0,3).map((client,i)=>{
                    return ( <Link key={i} className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/clients'>
                        <Avatar  sx={{ width: 24, height: 24 }} imgProps={{loading:'lazy'}} src={client?.companyLogo} >{client.company[0]}</Avatar>
                    <span className='ml-3'>{client.company} </span>
                </Link> )
                })}
                <Link className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/clients'>
                    <BsPersonLinesFill size='20px'  />
                    <span className='ml-3'> View All</span>
                </Link>
                <Link className='rounded-md w-10/12 flex items-center p-3 hover:bg-primary-orange-light hover:drop-shadow-xl transition-all' to='/clients'>
                    <FaUserPlus size='20px' />
                    <span className='ml-3'> Add Client</span>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default ClientList