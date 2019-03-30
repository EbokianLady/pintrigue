import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
  return (
    <div>
      <div className="board-cover">
        {/* {images} */}
      </div>
      <h3>{props.board.name}</h3>
      <p>15 Pins</p>
    </div>
  )
}

export default BoardIndexItem;

