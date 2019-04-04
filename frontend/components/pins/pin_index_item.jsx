import React from 'react';
import { Link } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.displayLinks = this.displayLinks.bind(this);
    // this.calculateSpan = this.calculateSpan.bind(this);
  }

  turnOffVisibility(e) {
    this.setState({ visible: false });
  }

  turnOnVisibility(e) {
    this.setState({ visible: true });
  }

  // calculateSpan() {
  //   const img = new Image();
  //   const { pin } = this.props;
  //   img.onload = () => {
  //     const span = (`${Math.ceil(img.height / (img.width / 23.6))}`);
  //     if (this.state.span === 0) {
  //       this.setState({ span: span });
  //       console.log(this.state.span);
  //     }
  //   };
  //   img.src = pin.pictureUrl;
  // }

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
    const height = (pin.span * 10) + 50;
    const rowEnd = 'span 17'
    // this.calculateSpan();

    return (
      <div className={`p-index-frame p-span-${pin.span + 5}`}
        // style={{ 'height': ((pin.span * 10) + 50), 'gridRowEnd': rowEnd }}
        style={{ 'height': height }}
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}>
        <div className='p-image-box'>
        <img className='p-picture' src={pin.pictureUrl} style={{ 'height': (pin.span * 10) }}/>
        </div>
        <div className='p-title'>
          <p>{pin.title}</p>
        </div>
        {this.displayLinks()}
      </div>
    )
  }
}

export default PinIndexItem;
