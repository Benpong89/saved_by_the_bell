require 'rails_helper'

RSpec.describe Profile, type: :model do
  subject(:profile) { FactoryBot.build(:profile) }

  describe 'validations' do
    it { should validate_presence_of(:fullname) }
    it { should validate_presence_of(:email) }
  end

  describe 'associations' do
    it { should belong_to(:user) }
    it { should have_many(:profile_categories) }
    it { should have_many(:categories).through(:profile_categories) }
  end
end

# class Profile < ApplicationRecord
#   validates :fullname, :email, presence: true
#   validates_uniqueness_of :user_id, allow_blank: true, allow_nil: true
#
#   belongs_to :user
#   has_many :profile_categories
#   has_many :categories,
#            through: :profile_categories
# end

# subject(:user) { FactoryBot.build(:user) }
#
# describe 'validations' do
#   it { should validate_presence_of(:username) }
#   it { should validate_length_of(:password).is_at_least(6).on(:create) }
# end
#
# describe 'associations' do
#   it { should have_one(:profile) }
# end
