# == Schema Information
#
# Table name: profile_categories
#
#  id          :bigint(8)        not null, primary key
#  profile_id  :integer
#  category_id :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class ProfileCategory < ApplicationRecord
  validates :profile_id, uniqueness: { scope: %i[profile_id category_id] }, presence: true

  belongs_to :category
  belongs_to :profile
end
