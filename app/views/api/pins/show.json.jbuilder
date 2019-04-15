json.pin do
  json.partial! 'api/pins/pin', pinjoin: @pinjoin
end

json.board do
  json.partial! 'api/boards/board', board: @pinjoin.board
end

json.user do
  json.partial! 'api/users/user', user: @pinjoin.creator
end
