# == Schema Information
#
# Table name: profiles
#
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
#

class Profile < ApplicationRecord
  validates :fullname, :email, :zipcode, :summary, :description, presence: true

  has_many :profile_categories
  has_many :categories,
           through: :profile_categories
end