import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchAllPins } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
  const pins = Object.values(state.entities.pins);

  return ({
    type: 'All',
    pins
  });
};

const mdp = dispatch => ({
  fetchPins: () => dispatch(fetchAllPins())
});

export default withRouter(connect(msp, mdp)(PinIndex));
