import React from 'react'
import {useDispatch} from 'react-redux'
import {BsBoxArrowUpRight,BsBoxArrowDownLeft} from 'react-icons/bs'
import {GoPrimitiveDot} from 'react-icons/go'
import Heading from './Heading'


const TransactionListItem = ({transaction,setdetails}) => {
  const dispatch = useDispatch()
  const updateTransactionDetail = ()=>{
      setdetails(true)
      dispatch({type:"SELECT",payload:transaction})
  }



  return (
    <div onClick={updateTransactionDetail} className='grid grid-cols-[1fr_4fr_3fr_2fr] items-center p-2 transition-all hover:bg-slate-200 hover:cursor-pointer rounded-md'>

                    { transaction.category.income ? 
                    <BsBoxArrowDownLeft fontSize='25px' className='text-primary-green-dark' />
                    :
                    <BsBoxArrowUpRight fontSize='25px' className='text-red-500' />
                            }
                   <div>
                       <Heading title={transaction.title} />
                       <p className=' text-slate-400 text-xs'>{transaction.date}</p>
                   </div>
                   <div className='flex items-center'>
                      <GoPrimitiveDot color={transaction.category.col} /> {transaction.category.name}
                   </div>
                   <div className={`${transaction.category.income ? 'text-primary-green-dark' : 'text-red-500' }  font-extrabold`}>
                       ${transaction.amount.toLocaleString()}
                   </div>

           </div>
  )
}

export default TransactionListItem