class ProfileValidateUnique < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :fullname, :string, unique: true
    change_column :profiles, :email, :string, unique: true
  end
end
