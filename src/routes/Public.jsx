import { Navigate } from 'react-router-dom';
import { useUser } from '../store/hooks';

export const Public = ({ children }) => {
  const { isLoggedIn } = useUser();
  console.log('Public -> isLoddedIn', isLoggedIn);
  return isLoggedIn ? <Navigate to="/tasker" /> : children;
};
