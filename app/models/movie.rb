class Movie < ApplicationRecord
  validates :title, presence: true
  validates :character, presence: true
  validates :poster_path, presence: true
  validates :media_type, presence: true
  validates :overview, presence: true
end
