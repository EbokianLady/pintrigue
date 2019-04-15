json.user do
  json.partial! 'api/users/user', user: @board.creator
end

json.board do
  json.partial! 'api/boards/board', board: @board
end

json.pins do
  @board.pin_joins.each do |pinjoin|
    json.set! pinjoin.id do
      json.partial! 'api/pins/pin', pinjoin: pinjoin
    end
  end
end
