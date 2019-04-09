import React from 'react';
import { Route, Redirect, Switch, Link, HashRouter, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { updatePin, deletePin } from '../../actions/pin_actions';
import { fetchBoards } from '../../actions/board_actions';
import EditPinForm from './edit_pin_form';
import { closeModal, openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const pinId = state.ui.currentObject;
  const pin = state.entities.pins[pinId];
  const currentUser = state.entities.users[state.session.id];
  const users = Object.values(state.entities.users);
  let creator;

  if (users.length > 0 && pin) {
    const user = users.filter(user => user.id === pin.creator.id)[0];
    creator = user.username;
  }

  return ({
    pin, currentUser, creator
  });
};

const mdp = dispatch => ({
  updatePin: (pin) => dispatch(updatePin(pin)),
  deletePin: (pinId) => dispatch(deletePin(pinId)),
  closeModal: (modal) => dispatch(closeModal(modal)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(EditPinForm));
