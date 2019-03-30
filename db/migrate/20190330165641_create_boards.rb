class CreateBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :boards do |t|
      t.integer :creator_id, null: false
      t.string :name, null: false
      t.text :description
      t.boolean :is_public, default: true
      t.timestamps
      t.index :creator_id
    end
  end
end
