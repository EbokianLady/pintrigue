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
    if (this.state.visible && this.props.authorized) {
      return (
        <button
          onClick={this.showModal}
          className='b-index-link'>
          <i className='fas fa-pen b-fas'></i>
        </button>
      )
    }
  }

  displayCover() {
    const { cover_urls } = this.props.board;
    if (cover_urls.length === 3) {
      return (
        <div className="board-display" >
          <img className="b3-pic1" src={cover_urls[0]} />
          <img className="b3-pic2" src={cover_urls[1]} />
          <img className="b3-pic3" src={cover_urls[2]} />
        </div>
      )
    } else if (cover_urls.length === 1) {
      return (
        <img src={cover_urls[0]} />
      )
    }
  }

  render() {
    const { board } = this.props;
    const count = board.pin_join_ids.length
    const pinTense = (count === 1) ? 'Pin' : 'Pins';
    this.displayCover();

    return (
      <div
        className='b-index-frame'
        onMouseEnter={this.turnOnVisibility}
        onMouseLeave={this.turnOffVisibility}>
        <Link
          to={`/boards/${board.id}`} >
          <div className='b-cover'>
            {this.displayCover()}
          </div>
          <div className='b-footer-auth'>
            <div>
              <h3 className='b-index-title'>{board.name}</h3>
              <p className='b-index-pincount'>{count} {pinTense}</p>
            </div>
          </div>
        </Link>
        {this.displayEdit()}
      </div>
    )
  }
}


export default BoardIndexItem;
