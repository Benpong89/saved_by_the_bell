class UniqueValidations < ActiveRecord::Migration[5.2]
  def change
    add_index :profiles, :fullname, unique: true
    add_index :profiles, :email, unique: true
    add_index :categories, :category, unique: true
  end
end
