import React from "react";
import { MediaProvider } from "../contexts/MediaContext";
import { GenreProvider } from "../contexts/GenreContext";
import Filters from "../components/Filters";
import MediaList from "../components/MediaList";

const Series = () => {
  return (
    <GenreProvider>
      <MediaProvider data="series">
        <h1 className="visually-hidden">MoviesReactJS - series</h1>
        <Filters />
        <MediaList title="Searched series" />
      </MediaProvider>
    </GenreProvider>
  );
};

export default Series;
