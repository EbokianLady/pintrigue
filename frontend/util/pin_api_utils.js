export const fetchAllPins = (page) => {
  return $.ajax({
    method: 'GET',
    url: `api/all_pins`,
    data: { page }
  });
};

export const fetchBoardPins = (id, page) => {
  return $.ajax({
    method: 'GET',
    url: `api/board_pins/${id}`,
    data: { page }
  });
};

export const fetchUserPins = (username, page) => {
  return $.ajax({
    method: 'GET',
    url: `api/user_pins/${username}`,
    data: { page }
  });
};

export const fetchPins = () => {
  return $.ajax({
    method: 'GET',
    url: `api/pin_joins`
  });
};

export const fetchPin = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pin_joins/${id}`
  });
};

export const createPin = (formData, id) => {
  return $.ajax({
    method: 'POST',
    url: `api/boards/${id}/pins`,
    data: formData,
    contentType: false,
    processData: false,
  });
};

export const createPinJoin = (pin, id) => {
  return $.ajax({
    method: 'POST',
    url: `api/boards/${id}/pin_joins`,
    data: { pin },
  });
};

export const updatePin = (pin) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/pin_joins/${pin.id}`,
    data: { pin }
  });
};

export const deletePin = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/pin_joins/${id}`
  });
};
