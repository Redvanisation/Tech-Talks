class CreateTalksUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :talks_users, id: false do |t|
      t.integer "user_id"
      t.integer "talk_id"
    end
    add_index("talks_users", ["user_id", "talk_id"], unique: true)
  end
end
