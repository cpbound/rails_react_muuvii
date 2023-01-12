# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json'

file = File.open('db/movies.json').read
json_data = JSON.parse file

p "I've got an idea for a movie and it goes like this..."

json_data[0] do |data|
  Movie.create!(title: data['title'],
  alternative_titles: data['alternative_title'],
  year: data['year'],
  image: data['image'],
  color: data['color'],
  score: data['score'],
  rating: data['rating'],
  actors: data['actors'],
  actor_facets: data['actor_facets'],
  genre: data['genre'],
  objectID: data['objectID']
  )
end

p "I get a job and quit my band and you stop being a bitch."
p "Made #{Movie.count} movies"
