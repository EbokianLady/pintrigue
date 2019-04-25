import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchAllPins, clearPinIndex } from '../../actions/pin_actions';
import { openModal } from '../../actions/modal_actions';

const msp = (state, ownProps) => {
  const currentUser = state.entities.users[state.session.id] || {};
  const pins = Object.values(state.entities.pins);

  return ({
    type: 'All',
    currentUser,
    pins,
  });
};

const mdp = dispatch => ({
  clearPinIndex: () => dispatch(clearPinIndex()),
  fetchPins: (page) => dispatch(fetchAllPins(page)),
  openModal: (modal, objectId) => dispatch(openModal(modal, objectId)),
});

export default withRouter(connect(msp, mdp)(PinIndex));
