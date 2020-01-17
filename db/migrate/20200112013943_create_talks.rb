class CreateTalks < ActiveRecord::Migration[6.0]
  def change
    create_table :talks do |t|
      t.string :title
      t.text :description
      t.string :speakers
      t.string :speciality
      t.string :date
      t.string :start_time
      t.string :end_time
      t.string :location

      t.timestamps
    end
  end
end
