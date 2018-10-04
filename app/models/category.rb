# == Schema Information
#
# Table name: categories
#
#  id         :bigint(8)        not null, primary key
#  category   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Category < ApplicationRecord
  validates :category, presence: true

  has_many :profile_categories
  has_many :profiles,
           through: :profile_categories
end
