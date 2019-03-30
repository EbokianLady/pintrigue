class CreatePins < ActiveRecord::Migration[5.2]
  def change
    create_table :pins do |t|
      t.string :link_url, null: false
      t.timestamps
    end
  end
end
