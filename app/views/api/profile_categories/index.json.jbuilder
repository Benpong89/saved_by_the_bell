@profile_categories.each do |_profile_category|
  json.set! profile_category.id do
    json.extract! profile_category, :profile_id, :category_id
  end
end
