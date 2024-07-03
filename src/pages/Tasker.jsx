import {
  BoardSquare,
  Dashboard,
  Knight,
  Square,
} from '../components/Dashboard/Dashboard';

const Tasker = () => {
  return (
    <div>
      <h1>Tasker</h1>
      <Dashboard knightPosition={[2, 2]} />;
    </div>
  );
};
export default Tasker;
