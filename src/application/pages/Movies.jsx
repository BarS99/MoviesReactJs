import React from "react";
import { MediaProvider } from "../contexts/MediaContext";
import { GenreProvider } from "../contexts/GenreContext";
import Filters from "../components/Filters";
import MediaList from "../components/MediaList";

const Media = () => {
  return (
    <GenreProvider>
      <MediaProvider data="movies">
        <h1 className="visually-hidden">MoviesReactJS - movies</h1>
        <Filters />
        <MediaList title="Searched movies" />
      </MediaProvider>
    </GenreProvider>
  );
};

export default Media;
