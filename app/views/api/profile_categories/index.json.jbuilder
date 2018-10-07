@profile_categories.each do |profile_category|
  json.set! profile_category.id do
    json.extract! profile_category, :id, :profile_id, :category_id
  end
end
