import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PinIndex from './pin_index';
import { fetchBoardPins } from '../../actions/pin_actions';

const msp = (state, ownProps) => {
  const boardId = ownProps.match.params.boardId;
  const pins = Object.values(state.entities.pins);

  return ({
    type: 'Board',
    pins,
    boardId
  });
};

const mdp = dispatch => ({
  fetchPins: (boardId) => dispatch(fetchBoardPins(boardId))
});

export default withRouter(connect(msp, mdp)(PinIndex));
