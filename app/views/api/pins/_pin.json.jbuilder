json.extract! pinjoin, :id, :board_id, :pin_id, :description, :title, :creator
json.extract! pinjoin.pin, :link_url, :row_height
json.pictureUrl url_for(pinjoin.pin.picture)
