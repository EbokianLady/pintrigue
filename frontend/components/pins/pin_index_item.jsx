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

  // TO-DO regex the link name later
  displayLinks() {
    if (this.state.visible) {
      const { pin } = this.props;
      let link;

      if (pin.link_url !== '') {
        link = (
          <a href={pin.link_url}>
            <i className='fas fa-chevron-right'></i>
            <p>Check it out</p>
          </a>
        )
      }

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
            {link}
          </div>
        </div>
      )
    }
  }

  render() {
    const { pin } = this.props;

    return (
      <div className='grid-item'>
        <div className='p-index-frame'
              onMouseEnter={this.turnOnVisibility}
              onMouseLeave={this.turnOffVisibility}>
          <div className='p-image-box'>
            <img className='p-picture' src={pin.pictureUrl} />
          </div>
          <div className='p-title'>
            {pin.title}
          </div>
          {this.displayLinks()}
        </div>
      </div>
    )
  }
}

export default PinIndexItem;
