import { combineReducers } from 'redux';
import users from './users_reducer';
import boards from './boards_reducer';
import pins from './pins_reducer';

export default combineReducers({
  users, boards, pins
});