import React from 'react'
import useTransactions from '../Hooks/useTransactions'
import TransactionListItem from './TransactionListItem'


const TransactionTable = ({setdetails}) => {

  const alltransactions = useTransactions()
  // console.log(alltransactions)

  return (

       <div className='flex flex-col overflow-scroll h-[35rem]'>
         {alltransactions && alltransactions.map((transaction,i)=>{
          return <TransactionListItem setdetails={setdetails} transaction={transaction} key={i}  />
         })}
       </div>
  )
}

export default TransactionTable