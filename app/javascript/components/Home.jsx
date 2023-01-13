import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">🎞️M🎞️O🎞️V🎞️I🎞️E🎞️S🎞️</h1>
        <p className="lead">It's a load of movies to watch and stuff!</p>
        <hr className="my-4" />
        <div class="input-group">
          <input
            type="search"
            class="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button type="button" class="btn btn-outline-primary">
            search
          </button>
        </div>
        <hr className="my-4" />
        <Link to="/movies" className="btn btn-lg custom-button" role="button">
          All Movies
        </Link>
      </div>
    </div>
  </div>
);
