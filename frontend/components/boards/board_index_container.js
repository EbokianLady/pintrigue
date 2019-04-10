import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { fetchBoards } from '../../actions/board_actions';
import { fetchPins } from '../../actions/pin_actions';
import BoardIndex from './board_index';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const username = ownProps.match.params.username;
  const user = state.entities.users[username];
  const boards = Object.values(state.entities.boards)
    .filter(board => board.creator_id === user.id);
  const pins = Object.values(state.entities.pins)
    .filter(pin => pin.creator.id === user.id);
  return ({
    currentUser, username, user, boards, pins
  });
};

const mdp = dispatch => ({
  fetchBoards: () => dispatch(fetchBoards()),
  fetchPins: () => dispatch(fetchPins()),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(BoardIndex));
