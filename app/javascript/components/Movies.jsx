import { Button } from "bootstrap";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "/api/v1/movies/index";
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new error("Network response was whacked.");
      })
      .then((res) => setMovies(res))
      .catch(() => navigate("/"));
  }, []);

  const allMovies = movies.map((movie, index) => (
    <div key={index} className="col-md-4 col-lg-3">
      <div className="card mb-4">
        <h5>{movie.id}</h5>
        <h1>🎞️🎞️🎞️🎞️</h1>
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          <p>{movie.release_date}</p>
          <p>{movie.overview}</p>
          <p>{movie.character}</p>
          <p>{movie.media_type}</p>
          <Link to={`/movie/${movie.id}`} className="btn custom-button">
            View Movie
          </Link>
          <button
            type="button"
            className="btn btn-danger btn-sm"
            onClick={() => deleteMovie(movie.id)}
          >
            Delete💥
          </button>
        </div>
      </div>
    </div>
  ));

  function deleteMovie(props) {
    const url = `/api/v1/destroy/${props}`;
    const token = document.querySelector('meta[name="csrf-token"]').content;
    if (confirm("Do you want to delete this entry?") == true) {
      fetch(url, {
        method: "DELETE",
        headers: {
          "X-CSRF-Token": token,
          "Content-Type": "application/json",
        },
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not good brah.");
        })
        .catch((error) => console.log(error.message));
      const newMovies = movies.filter((movie) => movie.id !== props);
      setMovies(newMovies);
    } else {
      return;
    }
  }

  const noMovies = (
    <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
      <h4>
        No Movies yet. Why not <Link to="/new_movie">create one</Link>
      </h4>
    </div>
  );

  return (
    <>
      <section className="jumbotron jumbotron-fluid text-center">
        <div className="container py-5">
          <h1 className="display-4">All dem movies</h1>
          <p className="lead text-muted">Here's some stuff to watch</p>
        </div>
      </section>
      <div className="py-5">
        <main className="container">
          <div className="text-end mb-3">
            <Link to="/movie" className="btn custom-button">
              Add new movie
            </Link>
          </div>
          <div className="row">{movies.length > 0 ? allMovies : noMovies}</div>
          <Link to="/" className="btn btn-link">
            Home
          </Link>
        </main>
      </div>
    </>
  );
};

export default Movies;
