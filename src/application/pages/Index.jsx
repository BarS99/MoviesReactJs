import React from "react";
import MainTop from "../components/MainTop";
import MovieList from "../components/MovieSection";
import { MovieProvider } from "../contexts/MovieContext";

const Index = () => {
  return (
    <>
      <MainTop />
      <MovieProvider>
        <MovieList />
      </MovieProvider>
    </>
  );
};

export default Index;
