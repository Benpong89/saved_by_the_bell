class CreateProfileCategories < ActiveRecord::Migration[5.2]
  def change
    create_table :profile_categories do |t|
      t.integer :profile_id
      t.integer :category_id

      t.timestamps
    end

    add_index :profile_categories, :profile_id
    add_index :profile_categories, :category_id
  end
end
