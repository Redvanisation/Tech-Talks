class Talk < ApplicationRecord
  has_and_belongs_to_many :users

  validates :title, presence: true
  validates :description, presence: true
  validates :speakers, presence: true
  validates :date, presence: true
  validates :start_time, presence: true
  validates :end_time, presence: true
  validates :location, presence: true
end
