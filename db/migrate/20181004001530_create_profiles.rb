class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :fullname, null: false
      t.string :email, null: false
      t.integer :zipcode, null: false
      t.string :summary, null: false
      t.string :description, null: false
      t.boolean :published, default: false
      t.string :imgURL
      t.string :resumeLink
      t.integer :user_id

      t.timestamps
    end

    add_index :profiles, :user_id
  end
end
