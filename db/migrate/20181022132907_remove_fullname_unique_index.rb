class RemoveFullnameUniqueIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :profiles, name: 'index_profiles_on_fullname'
  end
end
