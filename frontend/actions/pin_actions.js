import * as PinApiUtil from "../util/pin_api_utils";

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

export const receivePins = (payload) => {
  return {
    type: RECEIVE_PINS,
    users: payload.users,
    boards: payload.boards,
    pins: payload.pins,
  };
};

export const receivePin = (payload) => {
  return {
    type: RECEIVE_PIN,
    user: payload.user,
    board: payload.board,
    pin: payload.pin,
  };
};

export const removePin = (payload) => {
  return {
    type: REMOVE_PIN,
    pinId: payload.pin.id,
  };
};

export const receivePinErrors = (errors) => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

// thunk

export const fetchPins = () => dispatch => (
  PinApiUtil.fetchPins().then(payload => (
    dispatch(receivePins(payload))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const fetchPin = id => dispatch => (
  PinApiUtil.fetchPin(id).then(payload => (
    dispatch(receivePin(payload))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const createPin = (formData, boardId) => dispatch => (
  PinApiUtil.createPin(formData, boardId).then(payload => (
    dispatch(receivePin(payload))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const createPinJoin = (pin, boardId) => dispatch => (
  PinApiUtil.createPinJoin(pin, boardId).then(payload => (
    dispatch(receivePin(payload))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const updatePin = pin => dispatch => (
  PinApiUtil.updatePin(pin).then(payload => (
    dispatch(receivePin(payload))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const deletePin = id => dispatch => (
  PinApiUtil.deletePin(id).then(payload => (
    dispatch(removePin(payload))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);
