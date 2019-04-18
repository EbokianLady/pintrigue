export const createFollow = (follow) => {
  return $.ajax({
    method: 'POST',
    url: `api/follows`,
    data: { follow }
  });
};

export const deleteFollow = (id, follow) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/follows/${id}`,
    data: { follow }
  });
};
