export const fetchBoards = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/users/${id}/boards`
  });
};

export const fetchBoard = (id) => {
  return $.ajax({
    method: 'GET',
    url: `api/boards/${id}`
  });
};

export const createBoard = (board) => {
  return $.ajax({
    method: 'POST',
    url: "api/boards",
    data: { board }
  });
};

export const updateBoard = (board) => {
  return $.ajax({
    method: 'PATCH',
    url: `api/boards/${board.id}`,
    data: { board }
  });
};

export const deleteBoard = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/boards/${id}`
  });
};

