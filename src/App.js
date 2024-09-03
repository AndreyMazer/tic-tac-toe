import React from 'react';
import TicTacToe from './components/TicTacToe';
import './App.css';

const App = () => {
  return (
    <div className="game">
      <h1 className='tictac__title'>Игра Крестики-Нолики</h1>
      <TicTacToe />
    </div>
  );
};

export default App;