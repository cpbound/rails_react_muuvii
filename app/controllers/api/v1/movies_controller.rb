class Api::V1::MoviesController < ApplicationController
  before_action :set_movie, only: %i[show destroy]

  def index
    movie = Movie.all
    render json: movie
  end

  def create
    movie = Movie.create!(movie_params)
    if movie
      render json: movie
    else
      render json: movie.errors
    end
  end

  def show
    render json: @movie
  end

  def destroy
    @movie&.destroy
    render json: { message: 'Movie deleted'}
  end

  private

  def movie_params
    params.permit(:title, :id)
  end

  def set_movie
    @movie = Movie.find(params[:id])
  end
end
