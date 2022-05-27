import {useSelector} from 'react-redux'

const useBalance = () => {
  const BankState = useSelector(state=>state.BankState.bank.balance)
  return BankState
}

export default useBalance