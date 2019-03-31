import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = (props) => {
  return (

      <div className="b-index-frame">
        <div className="b-cover">
          {/* {images} */}
        </div>
        <div className="b-info">
          <div>
            <h3 className="b-index-title">{props.board.name}</h3>
            <p className="b-index-pincount">15 Pins</p>
          </div>
          <button className="b-index-link">
            <i className="fas fa-pen b-fas"></i>
          </button>
        </div>
      </div>

  )
}

export default BoardIndexItem;

