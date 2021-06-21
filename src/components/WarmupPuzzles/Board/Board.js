import React from 'react';

const Board = (props) => {
  const drop = e => {
    e.preventDefault();
    const cards_id = e.dataTransfer.getData('cards_id');

    const cards = document.getElementById(cards_id);
    cards.style.display = 'block';
    console.log("okay")
    e.target.appendChild(cards);

  }

  const dragOver = e => {
    e.preventDefault();
  }
  return (
    <div 
      id={props.id}
      className={props.className}
      onDrop={drop}
      onDragOver={dragOver}
    >
      {props.children}
    </div>
  );
};


export default Board;