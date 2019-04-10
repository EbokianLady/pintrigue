import * as PinApiUtil from "../util/pin_api_utils";

export const RECEIVE_PINS = "RECEIVE_PINS";
export const RECEIVE_PIN = "RECEIVE_PIN";
export const REMOVE_PIN = "REMOVE_PIN";
export const RECEIVE_PIN_ERRORS = "RECEIVE_PIN_ERRORS";

export const receivePins = (pins) => {
  return {
    type: RECEIVE_PINS,
    pins,
  };
};

export const receivePin = (pin) => {
  return {
    type: RECEIVE_PIN,
    pin,
  };
};

export const removePin = (pinId) => {
  return {
    type: REMOVE_PIN,
    pinId,
  };
};

export const receivePinErrors = (errors) => ({
  type: RECEIVE_PIN_ERRORS,
  errors
});

// thunk

export const fetchPins = () => dispatch => (
  PinApiUtil.fetchPins().then(pins => (
    dispatch(receivePins(pins))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const fetchPin = id => dispatch => (
  PinApiUtil.fetchPin(id).then(pin => (
    dispatch(receivePin(pin))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const createPin = (formData, boardId) => dispatch => (
  PinApiUtil.createPin(formData, boardId).then(pin => (
    dispatch(receivePin(pin))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const createPinJoin = (pin, boardId) => dispatch => (
  PinApiUtil.createPinJoin(pin, boardId).then(pin => (
    dispatch(receivePin(pin))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const updatePin = pin => dispatch => (
  PinApiUtil.updatePin(pin).then(pin => (
    dispatch(receivePin(pin))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);

export const deletePin = id => dispatch => (
  PinApiUtil.deletePin(id).then(pin => (
    dispatch(removePin(pin.id))
  ), err => (
    dispatch(receivePinErrors(err.responseJSON))
  ))
);
