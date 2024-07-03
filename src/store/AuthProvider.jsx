import { createContext, useEffect, useState } from 'react';
import { loginPost, logOutPost, refresh } from '../auth/auth-request';
import { setToken } from '../configApi/herokuApi';
import { set } from 'date-fns';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [refreshed, setRefreshed] = useState(false);

  const login = async credentials => {
    try {
      const { data } = await loginPost(credentials);
      localStorage.setItem('token', data.token);
      setUser(data);
      setIsLoggedIn(true);
      return data;
    } catch (error) {
      console.log('error', error);
      return error;
    }
  };
  const logout = async () => {
    try {
      await logOutPost();
      setUser(null);
      setIsLoggedIn(false);
      setRefreshed(false);
      localStorage.removeItem('token');
    } catch (error) {
      console.log('error', error);
      return error;
    }
  };

  const fresh = async () => {
    const token = localStorage.getItem('token');
    console.log('fresh', token);

    if (!token) {
      return 'no token';
    } else {
      setToken(token);
      try {
        const { data } = await refresh(token);
        setUser(data);
        setIsLoggedIn(true);
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  const isAuthenticated = () => {
    return !!user;
  };

  const contextValue = {
    user,
    isLoggedIn,
    refreshed,
    login,
    logout,
    isAuthenticated,
    fresh,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
