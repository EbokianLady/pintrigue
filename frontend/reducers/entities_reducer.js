import { combineReducers } from 'redux';
import users from './users_reducer';
import boards from './boards_reducer';

export default combineReducers({
  users, boards
});