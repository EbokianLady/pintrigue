json.extract! pinjoin, :id, :board_id, :pin_id, :description, :title
json.extract! pinjoin.pin, :link_url
json.pictureUrl url_for(pinjoin.pin.picture)