import { combineReducers } from 'redux';
import modal from './modal_reducer';
import currentObject from './current_object_reducer';

export default combineReducers({
  modal, currentObject
});
