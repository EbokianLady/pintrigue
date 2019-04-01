export const fetchAllPins = () => {
  return $.ajax({
    method: 'GET',
    url: `api/pins`
  });
};

export const fetchUserPins = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}/pins`
  });
};

export const fetchBoardPins = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/boards/${id}/pins`
  });
};

export const fetchPin = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/pins/${id}`
  });
};

export const createPin = (pin, id) => {
  return $.ajax({
    method: 'POST',
    url: `api/boards/${id}/pins`,
    data: { pin }
  });
};

export const updatePin = (pin) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/pins/${pin.id}`,
    data: { pin }
  });
};

export const deletePin = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/pins/${id}`
  });
};