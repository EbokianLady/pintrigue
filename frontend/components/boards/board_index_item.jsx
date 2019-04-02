import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
  return (
    <div className="b-index-frame">
      <Link
        to={`/boards/${props.board.id}`} >
        <div className="b-cover">
          {/* {images} */}
        </div>
        <div className="b-info">
          <div>
            <h3 className="b-index-title">{props.board.name}</h3>
            <p className="b-index-pincount">15 Pins</p>
          </div>
        </div>
      </Link>
      <button
        className="b-index-link">
        <i className="fas fa-pen b-fas"></i>
      </button>
    </div>
  )
}

export default BoardIndexItem;

