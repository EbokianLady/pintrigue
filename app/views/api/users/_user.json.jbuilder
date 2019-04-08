json.extract! user, :id, :username, :first_name, :last_name, :description, :location, :board_ids, :pin_join_ids

if user.photo.attached?
  json.photoUrl url_for(user.photo)
end
