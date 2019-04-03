import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';
import SelectBoard from './select_board';

class CreatePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      pin: { pin_id: '', description: '', link_url: '', title: ''},
      boardscroll: false,
      choiceDialogue: 'Choose a board (required)',
    };
    this.showBoardScroll = this.showBoardScroll.bind(this);
    this.hideBoardScroll = this.hideBoardScroll.bind(this);
    this.displayBoardScroll = this.displayBoardScroll.bind(this);
    this.handleBoard = this.handleBoard.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    // this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards(this.props.username);
  }

  componentWillUnmount() {
    // this.props.clearErrors();
  }

  handleBoard(board) {
    this.setState({ boardId: board.id, choiceDialogue: board.name });
    this.hideBoardScroll();
  }

  displayBoardScroll() {
    if (this.state.boardscroll) {
      const boards = this.props.boards.map((board, i) => {
        return (
          <SelectBoard
            onSelectBoard={this.handleBoard}
            board={board} 
            key={i} 
          />
        )
      });

      return (
        <div className='board-scroll-container'>
          {boards}
        </div>
      )
    }
  }

  // TO-DO this doesn't work. But why?
  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  hideBoardScroll(e) {
    this.setState({ boardscroll: false });
  }

  showBoardScroll(e) {
    this.setState({ boardscroll: true });
  }

  // handleCancel(e) {
  //   e.preventDefault();
  //   this.props.closeModal();
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createPin(this.state.pin, this.state.boardId);
  }

  render() {
    const { pin } = this.state;

    return (
      <div className='pin-form-buffer'>
        <div className='pin-form-box'>
          <div className='pin-form-header'>
            <button
              className='save-btn'
              onClick={this.handleSubmit} >
              <i className='fas fa-map-pin'></i>
              <p>Save</p>
            </button>
          </div>
          <div className='pin-form'>
            <div className='upload-box'>
              <div className='upload-outline'>
                <button className='upload-btn'>
                  <i className='fas fa-arrow-circle-up'></i>
                </button>
                <p>Click to upload</p>
              </div>
            </div>
            <div className='pin-form-content'>
              <div className='pin-title'>
                <textarea 
                  placeholder='Add your title'
                  onChange={this.update('title')}>
                </textarea>
              </div>

              <div className='pin-description'>
                <textarea 
                  placeholder='Tell everyone what your Pin is about'
                  onChange={this.update('description')}>
                </textarea>
              </div>

              <div className='pin-url'>
                <textarea 
                  placeholder='Add a destination link'
                  onChange={this.update('link_url')}>
                </textarea>
              </div>
              <div
                className='board-choices'
                onClick={this.showBoardScroll} >
                <p>{this.state.choiceDialogue}</p>
                <div className='arrow-down'>
                  <i className='fas fa-chevron-down'></i>
                </div>
              </div>
            </div>
          </div>
          {this.displayBoardScroll()}
        </div>
      </div>
    )
  }
}

export default CreatePinForm;
