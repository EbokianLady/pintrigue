class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false
      t.string :username, null: false
      t.string :first_name
      t.string :last_name
      t.string :location
      t.timestamps
      t.index :email, unique: true
      t.index :session_token, unique: true
      t.index :username, unique: true
    end
  end
end
