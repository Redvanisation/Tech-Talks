class CreateTalks < ActiveRecord::Migration[6.0]
  def change
    create_table :talks do |t|
      t.string :title
      t.text :description
      t.string :speakers
      t.datetime :date
      t.string :location

      t.timestamps
    end
  end
end
