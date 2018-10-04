@profiles.each do |profile|
  json.set! profile.id do
    json.extract! profile, :id, :fullname, :email, :zipcode, :summary, :description, :published, :imgURL, :resumeLink, :user_id
  end
end

#  id          :bigint(8)        not null, primary key
#  fullname    :string           not null
#  email       :string           not null
#  zipcode     :integer          not null
#  summary     :string           not null
#  description :string           not null
#  published   :boolean          default(FALSE)
#  imgURL      :string
#  resumeLink  :string
#  user_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
