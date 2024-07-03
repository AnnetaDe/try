import { Outlet } from 'react-router-dom';
import { NavBar } from '../NavBar/NavBar';

export const Layout = () => {
  return (
    <div>
      <header>
        <p> Layout</p>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};
