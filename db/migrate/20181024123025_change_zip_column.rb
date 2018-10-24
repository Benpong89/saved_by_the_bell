class ChangeZipColumn < ActiveRecord::Migration[5.2]
  def change
    change_column :profiles, :zipcode, :string
  end
end
