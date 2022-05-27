import {useSelector } from 'react-redux'

const useTransactions = ()=>{
    const transactions = useSelector(state=>state.BankState.bank.transactions) 
    return transactions
}

export default useTransactions