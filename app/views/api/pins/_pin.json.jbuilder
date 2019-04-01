json.extract! pinjoin, :id, :board_id, :pin_id, :description
json.extract! pinjoin.pin, :link_url
# json.photoUrl url_for(user.photo)