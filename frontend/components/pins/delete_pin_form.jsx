import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import { deletePin } from '../../actions/pin_actions';

class DeletePinForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    this.props.deletePin(this.props.pinId)
      .then(this.props.closeModal())
      .then(this.props.history.push(`/boards/${this.props.boardId}`));
  }

  render() {
    return (
      <div className='form-buffer'>
        <div className='delete-form'>
          <div className='delete-header'>
            <p>Are you sure?</p>
          </div>
          <div className='delete-body'>
            <p>Once you delete a Pin, you can't undo it!</p>
          </div>
          <div className='delete-footer'>
            <button
              className='rectangle-btn'
              onClick={() => this.props.closeModal()} >
              Cancel
            </button>
            <button
              className={'rectangle-btn save-btn'}
              onClick={this.handleDelete} >
              Delete Pin
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const msp = (state, ownProps) => {
  const pinId = state.ui.currentObject;
  const boardId = state.entities.pins[pinId].board_id;

  return ({
    pinId,
    boardId,
  })
};

const mdp = dispatch => ({
  closeModal: (modal) => dispatch(closeModal(modal)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
});

export default withRouter(connect(msp, mdp)(DeletePinForm));
