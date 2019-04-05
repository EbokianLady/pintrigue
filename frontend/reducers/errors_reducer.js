import { combineReducers } from 'redux';
import sessionErrors from './session_errors_reducer';
import boardErrors from './board_errors_reducer';
import userErrors from './user_errors_reducer';

export default combineReducers({
  sessionErrors, boardErrors, userErrors
});