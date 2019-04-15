@boards.each do |board|
  json.users do
    json.set! board.creator.username do
      json.partial! 'api/users/user', user: board.creator
    end
  end

  json.boards do
    json.set! board.id do
      json.partial! 'api/boards/board', board: board
    end
  end

  json.pins do
    board.pin_joins.each do |pinjoin|
      json.set! pinjoin.id do
        json.partial! 'api/pins/pin', pinjoin: pinjoin
      end
    end
  end
end
