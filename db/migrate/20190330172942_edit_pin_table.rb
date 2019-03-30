class EditPinTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :link_url
    add_column :pins, :link_url, :string
  end
end
