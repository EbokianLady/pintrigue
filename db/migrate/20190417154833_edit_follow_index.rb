class EditFollowIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :follows, [:followed_id, :followed_type]
    add_index :follows, [:followed_id, :followed_type]
  end
end
