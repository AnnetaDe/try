import { useDrag } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ItemTypes } from '../Constants/Constants';

export let Knight = () => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: 'bold',
        cursor: 'move',
      }}
    >
      knight
    </div>
  );
};

export const Square = ({ black, children }) => {
  const fill = black ? 'black' : 'white';
  const stroke = black ? 'white' : 'black';
  return (
    <div
      style={{
        backgroundColor: fill,
        color: stroke,
        width: '100%',
        height: '100%',
      }}
    >
      {children}
    </div>
  );
};

export const BoardSquare = (i, [knightX, knightY]) => {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isHere = knightX === x && knightY === y;
  const oneBox = isHere ? <Knight /> : null;

  return (
    <div key={x + y} style={{ width: '12.5%', height: '12.5%' }}>
      <Square black={black}>{oneBox}</Square>
    </div>
  );
};

export const Dashboard = ({ knightPosition }) => {
  const squares = [];
  for (let i = 0; i < 64; i++) {
    squares.push(BoardSquare(i, knightPosition));
  }
  return (
    <DndProvider backend={HTML5Backend}>
      <div
        style={{
          width: '400px',
          height: '400px',
          display: 'flex',
          flexWrap: 'wrap',
        }}
      >
        {squares}
      </div>
    </DndProvider>
  );
};
