import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Movie = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({ title: "" });

  useEffect(() => {
    const url = `/api/v1/show/${params.id}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Network response was not ok.");
      })
      .then((response) => setMovie(response))
      .catch(() => navigate("/movies"));
  }, [params.id]);

  const addHtmlEntities = (str) => {
    return String(str).replace(/&lt;/g, "<").replace(/&gt;/g, ">");
  };

  // const ingredientList = () => {
  //   let ingredientList = "No ingredients available";

  //   if (recipe.ingredients.length > 0) {
  //     ingredientList = recipe.ingredients
  //       .split(",")
  //       .map((ingredient, index) => (
  //         <li key={index} className="list-group-item">
  //           {ingredient}
  //         </li>
  //       ));
  //   }

  //   return ingredientList;
  // };

  // const recipeInstruction = addHtmlEntities(recipe.instruction);

  return (
    <div className="">
      <div className="hero position-relative d-flex align-items-center justify-content-center">
        {/* <img
          src={movie.image}
          alt={`${movie.title} image`}
          className="img-fluid position-absolute"
        /> */}
        <div className="overlay bg-dark position-absolute" />
        <h1 className="display-4 position-relative text-white">
          {movie.title}
        </h1>
      </div>
      <div className="container py-5">
        <div className="row">
          <div className="col-sm-12 col-lg-3">
            <ul className="list-group"></ul>
          </div>
          <div className="col-sm-12 col-lg-7">
            <div className="col-sm-12 col-lg-2"></div>
          </div>
          <Link to="/movies" className="btn btn-link">
            Back to movies
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
