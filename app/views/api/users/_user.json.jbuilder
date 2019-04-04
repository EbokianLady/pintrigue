json.extract! user, :id, :username, :first_name, :last_name, :description, :location

if user.photo.attached?
  json.photoUrl url_for(user.photo)
end