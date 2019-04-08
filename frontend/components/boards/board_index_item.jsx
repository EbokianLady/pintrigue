import React from 'react';
import { Link } from 'react-router-dom';

class BoardIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.turnOffVisibility = this.turnOffVisibility.bind(this);
    this.turnOnVisibility = this.turnOnVisibility.bind(this);
    this.showModal = this.showModal.bind(this);
  }

  showModal(e) {
    this.props.openModal('editBoard', this.props.board.id);
  }

  turnOffVisibility(e) {
    this.setState({ visible: false });
  }

  turnOnVisibility(e) {
    this.setState({ visible: true });
  }

  // TO-DO current user permissions
  displayEdit() {
    if (this.state.visible) {
      return (
        <button
          onClick={this.showModal}
          className='b-index-link'>
          <i className='fas fa-pen b-fas'></i>
        </button>
      )
    }
  }

  displayImage() {
    const { pins } = this.props;
    if (pins.length > 2) {
      return (
        <div className="board-display" >
          <img className="b3-pic1" src={pins[0].pictureUrl} />
          <img className="b3-pic2" src={pins[1].pictureUrl} />
          <img className="b3-pic3" src={pins[2].pictureUrl} />
        </div>
      )
    } else if (pins.length > 0 ) {
      return (
        <img src={pins[0].pictureUrl} />
      )
    }
  }

  render() {
    const { board } = this.props;
    this.displayImage();

    return (
      <div
        className='b-index-frame'
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}>
        <Link
          to={`/boards/${board.id}`} >
          <div className='b-cover'>
            {this.displayImage()}
          </div>
          <div className='b-info'>
            <div>
              <h3 className='b-index-title'>{board.name}</h3>
              <p className='b-index-pincount'>{board.pin_join_ids.length} Pins</p>
            </div>
          </div>
        </Link>
        {this.displayEdit()}
      </div>
    )
  }
}


export default BoardIndexItem;
