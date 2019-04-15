import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions';
import BoardIndex from './board_index';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const user = ownProps.user;
  const username = user.username;
  const boards = ownProps.boards;
  const pins = ownProps.pins;
  return ({
    currentUser, username, user, boards, pins
  });
};

const mdp = dispatch => ({
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(BoardIndex));
