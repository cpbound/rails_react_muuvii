# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
require 'json'

paxton = File.open('db/paxton.json').read
pullman = File.open('db/pullman.json').read
paxton_json_data = JSON.parse paxton
pullman_json_data = JSON.parse pullman

p "I've got an idea for a movie and it goes like this..."

paxton_json_data.each do |data|
  Movie.create!(title: data['title'],
  original_title: data['original_title'],
  release_date: data['release_date'],
  poster_path: data['poster_path'],
  overview: data['overview'],
  character: data['character'],
  media_type: data['media_type'],
  backdrop_path: data["backdrop_path"]
  )
end

paxton_json_data.each do |data|
  Movie.create!(title: data['title'],
  original_title: data['original_title'],
  release_date: data['release_date'],
  poster_path: data['poster_path'],
  overview: data['overview'],
  character: data['character'],
  media_type: data['media_type'],
  backdrop_path: data["backdrop_path"]
  )
end

p "Game over man! Game over!"
p "Made #{Movie.count} movies"
p Movie[0]
