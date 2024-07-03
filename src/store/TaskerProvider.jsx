import { createContext } from 'react';
import Tasker from '../pages/Tasker';

export const TaskerContext = createContext();
export const TaskerProvider = ({ children }) => {
  const taskerContext = () => <Tasker />;
  return <TaskerContext.Provider value={taskerContext}>{children}</TaskerContext.Provider>;
};
