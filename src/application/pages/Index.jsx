import React from "react";
import MainTop from "../components/MainTop";
import MovieList from "../components/MovieSection";
import { MovieProvider } from "../contexts/MovieContext";
import HorizontalImage from "../components/HorizontalImage";
import Description from "../components/Description.jsx";

const Index = () => {
  return (
    <>
      <MainTop />
      <MovieProvider filters={{ limit: 12 }}>
        <MovieList />
      </MovieProvider>
      <HorizontalImage />
      <Description />
    </>
  );
};

export default Index;
