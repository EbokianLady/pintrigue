import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';
import SelectBoard from './select_board';

class CreatePinJoinForm extends React.Component {
  constructor(props) {
    super(props);
    const { pin } = this.props;
    this.state = {
      title: pin.title || '',
      description: pin.description || '',
      pin_id: pin.pin_id
    };
    this.handleBoard = this.handleBoard.bind(this);
  }

  componentDidMount() {
    this.props.fetchBoards();
  }

  handleBoard(board) {
    this.props.createPinJoin(this.state, board.id).then(this.props.closeModal());
  }

  displayBoardScroll() {
    const boards = this.props.boards.map((board, i) => {
      return (
        <SelectBoard
          onSelectBoard={this.handleBoard}
          board={board}
          key={i}
          text='Save'
        />
      )
    });

    return (
      <div className='board-scroll-container-2'>
        {boards}
      </div>
    )
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    return (
      <div className='form-buffer'>
        <div className='pinjoin-form'>
          <div className='pinjoin-header'>
            <h3>Choose board</h3>
            <button
              className='board-cancel-btn'
              onClick={() => this.props.closeModal()} >
              <i class="fas fa-times"></i>
            </button>
          </div>
          <div className='pinjoin-body'>
            <div className='pinjoin-left'>
              <img className='pinjoin-pic' src={this.props.pin.pictureUrl}/>
              <div className='pin-title'>
                <TextInput
                  className='input'
                  name="Pin Title"
                  value={this.state.title}
                  onChange={this.update('title')}
                />
              </div>
            </div>
            <div className='pinjoin-right'>
              {this.displayBoardScroll()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreatePinJoinForm;
