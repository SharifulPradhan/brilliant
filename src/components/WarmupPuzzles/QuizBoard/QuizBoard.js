import React from 'react';

const Board = (props) => {
  
  


  const drop = e => {
    e.preventDefault();
    const cards_id = e.dataTransfer.getData('cards_id');
    const cards = document.getElementById(cards_id);
    const boards = e.target.id;
    cards.style.display = 'block';
    e.target.appendChild(cards);
    console.log(cards_id, boards)
    if(boards === 'younger' && cards_id === "nicholas"){
      props.onImageDrop(prevState => [...prevState, { boards, cards_id }]);
      console.log('kaj hoise::::', cards_id, boards);
    }
    if(boards === 'middle' && cards_id === "joseph"){
      props.onImageDrop(prevState => [...prevState, { boards, cards_id }]);
      console.log('kaj hoise::::', cards_id, boards);
    }
    if(boards === 'older' && cards_id === "kevin"){
      props.onImageDrop(prevState => [...prevState, { boards, cards_id }]);
      console.log('kaj hoise::::', cards_id, boards);
    }
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