class AddSpanToPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :span, :integer
  end
end
