import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Movies from "../components/Movies"
import NewMovie from "../components/NewMovie"

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie" element={<NewMovie />} />
    </Routes>
  </Router>
);
