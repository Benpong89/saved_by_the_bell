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

require 'test_helper'

class ProfileCategoryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
