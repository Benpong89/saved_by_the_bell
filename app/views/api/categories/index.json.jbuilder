@categories.each do |category|
  json.set! category.id do
    json.extract! category, :id, :category, :profiles
  end
end
