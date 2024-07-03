import { NavLink } from 'react-router-dom';
import { useUser } from './../../store/hooks';
import { Public } from '../../routes/Public';

export const NavBar = () => {
  const { logout } = useUser();

  return (
    <nav className="flex items-center gap-16">
      <NavLink to="/" className="text-3xl">
        Home
      </NavLink>
      <NavLink to="/tasker">Tasker</NavLink>

      {/* <Public>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/register">Register</NavLink>{' '}
      </Public> */}
      <button
        className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
        onClick={() => {
          logout();
        }}
      >
        LogOut
      </button>
    </nav>
  );
};
