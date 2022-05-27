import {useSelector} from 'react-redux'

const useAuth = () => {
  const UserState = useSelector(state=>state.UserState)
  return UserState
}

export default useAuth