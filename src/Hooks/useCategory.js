import {useSelector} from 'react-redux'

const useCategory = () => {
  const CategoryState = useSelector(state=>state.CategoryState.categories)
  return CategoryState
}

export default useCategory