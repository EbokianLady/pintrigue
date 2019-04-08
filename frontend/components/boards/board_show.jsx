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
    this.props.fetchUsers();
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.hideDropdown);
  }

  allowBoardNav() {
    if (this.props.currentUser === this.props.creator) {
      return (
        <>
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
        </>
      )
    }
  }

  displayDropDown() {
    if (this.state.dropdown) {
      return (
        <div ref={node => this.node = node} className="profile-visible">
          <Link
            to={`/${this.props.username}/pin-builder`}
            className="dropdown-item">
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
                  <div className='profile-follows'></div>
                  <div className="profile-description">
                    {board.description}
                  </div>
                </section>
              </div>
            </div>
          </div>
          <div className='index-buffer'>
            <PinBoardIndexContainer />
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
