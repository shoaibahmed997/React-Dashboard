import {useSelector} from 'react-redux';

const useCurrentTransaction = ()=>{
    const CurrentTransaction= useSelector(state=>state.CurrentTransactionState.transaction)
    return CurrentTransaction
}

export default useCurrentTransaction