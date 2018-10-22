# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe User, type: :model do
  # To test
  # Validations
  # Associations
  # Class Methods
  # Error Messages

  subject(:user) { FactoryBot.build(:user) }

  describe 'validations' do
    it { should validate_presence_of(:username) }
    it { should validate_length_of(:password).is_at_least(6).on(:create) }
  end

  describe 'associations' do
    it { should have_one(:profile) }
  end
end
