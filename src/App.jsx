import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Layout } from './components/Layout/Layout';
import Tasker from './pages/Tasker';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import { Container } from './components/Container/Container';
import { Private } from './routes/Privat';
import { Public } from './routes/Public';
import { useUser } from './store/hooks';

function App() {
  const { isAuthentificad, fresh } = useUser();
  useEffect(() => {
    fresh();
    console.log('refreshed');
  }, []);

  return isAuthentificad ? (
    <h1>isAuth</h1>
  ) : (
    <Routes>
      <Route
        path="/"
        element={
          <Private>
            <Layout />
          </Private>
        }
      >
        <Route index element={<Home />} />
        <Route path="tasker" element={<Tasker />} />
      </Route>
      <Route
        path="/login"
        element={
          <Public>
            <Login />
          </Public>
        }
      />
      <Route
        path="/register"
        element={
          <Public>
            <Register />
          </Public>
        }
      />
    </Routes>
  );
}

export default App;
