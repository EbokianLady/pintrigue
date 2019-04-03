class AddColumnToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pin_joins, :title, :string
  end
end
