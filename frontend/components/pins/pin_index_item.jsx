import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.displayLinks = this.displayLinks.bind(this);
  }

  turnOffVisibility(e) {
    this.setState({ visible: false });
  }

  turnOnVisibility(e) {
    this.setState({ visible: true });
  }

  displayLinks() {
    if (this.state.visible) {
      return (
        <div className='p-links visible'>
          <div className='top-links'>
            <button
              className='p-btn'>
              <i className='fas fa-pen'></i>
            </button>
            <button
              className='save-btn'>
              <i className='fas fa-map-pin'></i>
              <p>Save</p>
            </button>
          </div>
          <div className='bottom-links'>
            <a href=''>
              <i className='fas fa-chevron-right'></i>
              <p>Link</p>
            </a>
          </div>
        </div>
      )
    }
  }

  render() {
    const { pin } = this.props;

    return (
      <div className="grid-item">
        <div className="p-index-frame"
              onMouseEnter={this.turnOnVisibility}
              onMouseLeave={this.turnOffVisibility}>
          <div className="p-image-box">
            {/* {image} */}
          </div>
          <div className="p-description">
            {pin.description}
          </div>
          {this.displayLinks()}
        </div>
      </div>
    )
  }
}

export default PinIndexItem;
