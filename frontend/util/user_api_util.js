export const fetchUser = (id) => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const fetchUsers = () => {
  // how do you fetch only specific users? followers/followees
  // custom routes that take in data?
};

export const updateUser = (formData, id) => (
  $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false,
  })
);