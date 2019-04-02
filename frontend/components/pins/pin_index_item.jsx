import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = (props) => {
  return (
    <div className="grid-item">
      <div className="p-index-frame">
        <div className="p-image-box">
          {/* {image} */}
        </div>
        <div className="p-description">

        </div>
        <div className="p-links">
          <div className="top-links">
            <button
              className="p-btn">
              <i class="fas fa-pen"></i>
            </button>
            <button
              className="save-btn">
              <i class="fas fa-map-pin"></i> 
              <p>Save</p>
            </button>
          </div>
          <div className="bottom-links">
            <a href="#">
              <i class="fas fa-chevron-right"></i>
              <p>Link</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PinIndexItem;