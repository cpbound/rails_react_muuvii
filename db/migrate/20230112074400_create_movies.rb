class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.string :title
      t.text :alternative_titles
      t.integer :year
      t.string :image
      t.string :color
      t.string :score
      t.string :rating
      t.text :actors
      t.text :actor_facets
      t.text :genre
      t.text :objectID

      t.timestamps
    end
  end
end
