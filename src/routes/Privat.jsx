import { Navigate } from 'react-router-dom';
import { useUser } from './../store/hooks';

export const Private = ({ children }) => {
  const { isLoggedIn } = useUser();
  console.log('Private -> isLoddedIn', isLoggedIn);
  return isLoggedIn ? children : <Navigate to="/login" />;
};
