import React from "react";
import { MovieProvider } from "../contexts/MovieContext";
import { GenreProvider } from "../contexts/GenreContext";
import Filters from "../components/Filters";
import MovieList from "../components/MovieList";

const Movies = () => {
  return (
    <GenreProvider>
      <MovieProvider>
        <Filters />
        <MovieList title="All movies" />
      </MovieProvider>
    </GenreProvider>
  );
};

export default Movies;
