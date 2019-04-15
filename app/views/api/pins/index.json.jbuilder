@pinjoins.each do |pinjoin|
  json.pins do
    json.set! pinjoin.id do
      json.partial! 'api/pins/pin', pinjoin: pinjoin
    end
  end

  json.boards do
    json.set! pinjoin.board.id do
      json.partial! 'api/boards/board', board: pinjoin.board
    end
  end

  json.users do
    json.set! pinjoin.creator.username do
      json.partial! 'api/users/user', user: pinjoin.creator
    end
  end
end
