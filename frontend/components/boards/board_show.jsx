import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import PinBoardIndexContainer from '../pins/pin_board_index_container';

class BoardShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = { dropdown: false };
    this.showDropdown = this.showDropdown.bind(this);
    this.showBoardModal = this.showBoardModal.bind(this);
    this.hideDropdown = this.hideDropdown.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoard(this.props.boardId);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hideDropdown);
  }

  allowBoardNav() {
    if (this.props.currentUser === this.props.creator) {
      return (
        <nav className='profile-nav'>
          <div className='prof-buttons prof-plus'
            onClick={this.showDropdown} >
            <i className='fas fa-plus p2-fas'></i>
            {this.displayDropDown()}
          </div>
          <button
            className='prof-buttons'
            onClick={this.showBoardModal}>
            <i className='fas fa-pen p2-fas'></i>
          </button>
        </nav>
      )
    } else {
      return (
        <nav className='profile-nav-guest'>
          <Link to={`/${this.props.creator.username}`}>
            {this.displayProfileImage()}
          </Link>
          {this.followBtn()}
        </nav>
      )
    }
  }

  displayProfileImage() {
    const user = this.props.creator;
    const letter = user.first_name ? user.first_name[0] : user.username[0];

    if (user.photoUrl) {
      return (
        <img className='profile-image' src={user.photoUrl}></img>
      )
    } else {
      return (
        <div className='profile-standin'><p>{letter.toUpperCase()}</p></div>
      )
    }
  }

  followBtn() {
    const { board, currentUser } = this.props;

    if (currentUser.followed_board_ids.includes(board.id)) {
      return (
        <button
          className='follow-btn unfollow'
          onClick={this.handleUnfollow.bind(this)} >
          Unfollow
        </button>
      )
    } else {
      return (
        <button
          className='follow-btn follow'
          onClick={this.handleFollow.bind(this)} >
          Follow
        </button>
      )
    }
  }

  handleFollow() {
    const follow = {
      followed_id: this.props.board.id,
      followed_type: 'Board',
    }
    this.props.createFollow(follow)
  }

  handleUnfollow() {
    const follow = {
      followed_id: this.props.board.id,
      followed_type: 'Board',
    }
    this.props.deleteFollow(this.props.board.id, follow)
  }

  displayDropDown() {
    if (this.state.dropdown) {
      return (
        <div ref={node => this.node = node} className='profile-visible'>
          <Link
            to={`/${this.props.username}/pin-builder`}
            className='dropdown-item'>
            Create pin
          </Link>
        </div>
      )
    }
  }

  hideDropdown(e) {
    if (!this.node.contains(e.target)) {
      this.setState({ dropdown: false });
      document.removeEventListener('mousedown', this.hideDropdown);
    }
  }

  showDropdown(e) {
    this.setState({ dropdown: true });
    document.addEventListener('mousedown', this.hideDropdown);
  }

  showBoardModal(e) {
    this.props.openModal('editBoard', this.props.boardId);
  }

  render() {
    const { board } = this.props;
    const count = (board) ? board.pin_join_ids.length : '0';
    const pinTense = (count === 1) ? 'Pin' : 'Pins';

    if (board) {
      return (
        <div>
          <div className='profile-buffer'>
            <div className='profile-box'>
              <div className='profile'>
                {this.allowBoardNav()}
                <section className='profile-body'>
                  <h2 className='profile-name'>
                    {board.name}
                  </h2>
                  <div className='profile-follows'>
                    {count} {pinTense}
                  </div>
                  <div className='profile-description'>
                    {board.description}
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='index-buffer'>
            <PinBoardIndexContainer
              creator={this.props.creator}
              board={this.props.board}
            />
          </div>
        </div>
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default BoardShow;
