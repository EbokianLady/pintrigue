class CreatePinJoins < ActiveRecord::Migration[5.2]
  def change
    create_table :pin_joins do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.text :description
      t.timestamps
      t.index [:pin_id, :board_id], unique: true
    end
  end
end
