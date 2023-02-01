class CreateMovies < ActiveRecord::Migration[7.0]
  def change
    create_table :movies do |t|
      t.boolean :adult
      t.string :backdrop_path
      t.string :original_title
      t.string :overview
      t.string :poster_path
      t.string :release_date
      t.string :title
      t.string :character
      t.string :media_type

      t.timestamps
    end
  end
end
