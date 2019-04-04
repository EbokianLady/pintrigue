class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :span
    add_column :pins, :row_height, :integer
  end
end
