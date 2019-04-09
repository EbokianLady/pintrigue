import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class PinIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.displayLinks = this.displayLinks.bind(this);
    this.showModal = this.showModal.bind(this);
    this.toPinShow = this.toPinShow.bind(this);
  }

  toPinShow(e) {
    if (e.target.className.includes('p-link')) {
      this.props.history.push(`/pins/${this.props.pin.id}`);
    }
  }

  showModal(e) {
    this.props.openModal('editPin', this.props.pin.id);
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
      const imageHeight = (pin.row_height * 10);
      let link;
      let edit;

      if (pin.link_url !== '') {
        link = (
          <a href={pin.link_url} target='_blank'>
            <i className="fas fa-external-link-alt"></i>
            <p>Check it out</p>
          </a>
        )
      }

      if (this.props.currentUser.username === pin.creator.username) {
        edit = (
          <button
            className='p-btn'
            onClick={this.showModal} >
            <i className='fas fa-pen'></i>
          </button>
        )
      } else {
        edit = <div></div>
      }

      return (
        <div className='p-links visible'
          onClick={this.toPinShow}
          style={{ 'height': imageHeight }}>
            <div className='top-links'>
              {edit}
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
    const frameHeight = (pin.row_height * 10) + 45;
    const imageHeight = (pin.row_height * 10);
    const gridSpan = `span ${pin.row_height + 6}`

    return (
      <div className={`p-index-frame`}
        style={{ 'height': frameHeight, 'gridRowEnd': gridSpan }}
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}>
        <div className='p-image-box'>
        <img className='p-picture' src={pin.pictureUrl} style={{ 'height': imageHeight }}/>
        </div>
        <div className='p-title'>
          <p>{pin.title}</p>
        </div>
        {this.displayLinks()}
      </div>
    )
  }
}

export default withRouter(PinIndexItem);
