class AddDatabaseValidations < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :fullname, :string, null: false, unique: true
    change_column :profiles, :email, :string, null: false, unique: true
    change_column :users, :username, :string, null: false, unique: true
    change_column :categories, :category, :string, null: false, unique: true
    change_column :profile_categories, :profile_id, :integer, null: false
    change_column :profile_categories, :category_id, :integer, null: false
  end
end
