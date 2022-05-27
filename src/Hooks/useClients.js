import {useSelector} from 'react-redux'

const useClients = ()=>{
    const Clients = useSelector(state=>state.ClientState.clients)
    return Clients
}

export default useClients