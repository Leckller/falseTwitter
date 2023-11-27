import { useSelector } from 'react-redux';
import { GlobalState } from '../types';

function useUser() {
  const { user } = useSelector((state:GlobalState) => state.UserReducer);
  return user;
}

export default useUser;
