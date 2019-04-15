import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchPins } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const creator = ownProps.creator;
  const board = ownProps.board;
  const pins = ownProps.pins;

  return ({
    type: 'Board',
    currentUser,
    creator,
    board,
    pins,
  });
};

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchPins()),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
