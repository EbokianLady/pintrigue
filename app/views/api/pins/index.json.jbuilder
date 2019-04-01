@pinjoins.each do |pinjoin|
  json.set! pinjoin.id do
    json.partial! 'api/pins/pin', pinjoin: pinjoin
  end
end