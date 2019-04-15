@users.each do |user|
  json.users do
    json.set! user.username do
      json.partial! "api/users/user", user: user
    end
  end

  json.boards do
    user.boards.each do |board|
      json.set! board.id do
        json.partial! 'api/boards/board', board: board
      end
    end
  end

  json.pins do
    user.pin_joins.each do |pinjoin|
      json.set! pinjoin.id do
        json.partial! 'api/pins/pin', pinjoin: pinjoin
      end
    end
  end
end
