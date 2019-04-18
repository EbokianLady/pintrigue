import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { TextInput } from '../global/form';

class BoardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: {
        name: this.props.board.name || '',
        description: this.props.board.description || '',
        id: this.props.board.id,
      },
      is_public: true,
      errors: null
    };
    this.handleCancel = this.handleCancel.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.closeModal();
  }

  handleDelete(e) {
    this.props.deleteBoard(this.props.board.id)
      .then(this.props.closeModal())
      .then(this.props.history.push(`/${this.props.creator.username}`));
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state.board).then(this.props.closeModal());
  }

  update(field) {
    return (e) => {
      this.setState({
        board: { ...this.state.board, [field]: e.currentTarget.value }
      });
    }
  }

  displayDeleteButton() {
    if (this.props.formType === 'edit') {
      return (
        <button
          className='rectangle-btn'
          onClick={this.handleDelete} >
          Delete
        </button>
      )
    } else {
      return null;
    }
  }

  displayActionButton() {
    if (this.state.name === '') {
      return (
        <button
          className={'rectangle-btn disabled'} >
          {this.props.buttonText}
        </button>
      )
    } else {
      return (
        <button
          className={'rectangle-btn save-btn'}
          onClick={this.handleSubmit} >
          {this.props.buttonText}
        </button>
      )
    }
  }

  displayDescription() {
    if (this.props.formType === 'edit') {
      return (
        <div className='board-description'>
          <p>Description</p>
          <textarea
            className='input board-description'
            placeholder="What's your board about?"
            value={this.state.board.description}
            onChange={this.update('description')}
          />
        </div>
      )
    } else {
      return null
    }
  }

  // onclick close modal
  render() {
    return (
      <div className='modal-page'>
        <div className='board-form-box'>
          <div className='form-header'>
            <h3>{this.props.header}</h3>
            <button
              className='board-cancel-btn'
              onClick={this.props.closeModal}>
              <i className='fas fa-times'></i>
            </button>
          </div>
          <form className='board-form'>
            <div className='board-name'>
              <p>Name</p>
              <TextInput
                className='input board-name'
                name="Like 'Places to Go' or 'Recipes to Make'"
                value={this.state.board.name}
                onChange={this.update('name')}
              />
            </div>
            {this.displayDescription()}
          </form>
          <div className='button-footer'>
            <div className='buttons-left'>
              {this.displayDeleteButton()}
            </div>
            <div className='buttons-right'>
              <button
                className='rectangle-btn'
                onClick={this.handleCancel} >
                Cancel
              </button>
              {this.displayActionButton()}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BoardForm;
