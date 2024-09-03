import React from 'react';
//import './Square.css'; // Если у вас есть стили для квадратов

const Square = ({ value, onClick }) => {
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
};

export default Square;