json.extract! user, :id, :username, :first_name, :last_name, :description, :location
json.photoUrl url_for(user.photo)
