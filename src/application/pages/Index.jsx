import React from "react";
import MainTop from "../components/MainTop";
import MovieList from "../components/MovieList";
import { MovieProvider } from "../contexts/MovieContext";
import HorizontalImage from "../components/HorizontalImage";
import Description from "../components/Description.jsx";

const Index = () => {
  return (
    <>
      <MainTop />
      <MovieProvider filters={{ limit: 12 }}>
        <MovieList title="Recently added" />
      </MovieProvider>
      <HorizontalImage />
      <Description />
    </>
  );
};

export default Index;
