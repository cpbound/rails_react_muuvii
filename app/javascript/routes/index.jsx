import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Movies from "../components/Movies"
import NewMovie from "../components/NewMovie"
import Movie from "../components/Movie"

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie" element={<NewMovie />} />
      <Route path="/movie/:id" element={<Movie />} />
    </Routes>
  </Router>
);
