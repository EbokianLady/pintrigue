import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';
import { fetchPin } from '../../actions/pin_actions';
import PinShow from './pin_show';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const pinId = ownProps.match.params.pinId;
  const pin = state.entities.pins[pinId];
  let board;
  let creator;

  // this isn't quite working ...
  if (pin) {
    board = state.entities.boards[pin.board_id];
    creator = state.entities.users[pin.creator.username];
  }

  return ({
    currentUser, creator, board, pin, pinId
  });
};

const mdp = dispatch => ({
  fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default connect(msp, mdp)(PinShow);
