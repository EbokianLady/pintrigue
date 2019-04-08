import { connect } from 'react-redux';
import { fetchPin } from '../../actions/pin_actions';
import { fetchUsers } from '../../actions/user_actions';
import { openModal } from '../../actions/modal_actions';
import PinShow from './pin_show';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id];
  const pinId = ownProps.match.params.pinId;
  const pin = state.entities.pins[pinId];
  // const users = Object.values(state.entities.users);
  // let creator;

  // if (board) {
  //   creator = users.filter(user => user.id === board.creator_id)[0];
  // }

  return ({
    pin, pinId
  });
};

const mdp = dispatch => ({
  fetchPin: (pinId) => dispatch(fetchPin(pinId)),
  fetchUsers: () => dispatch(fetchUsers()),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default connect(msp, mdp)(PinShow);
