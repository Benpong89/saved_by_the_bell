@profiles.each do |profile|
  json.set! profile.id do
    json.extract! profile, :id, :fullname, :email, :zipcode, :summary, :description, :published, :imgURL, :resumeLink, :user_id, :categories
  end
end
