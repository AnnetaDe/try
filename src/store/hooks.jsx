import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { TaskerContext } from './TaskerProvider';
export const useUser = () => useContext(AuthContext);

export const useTasker = () => useContext(TaskerContext);
