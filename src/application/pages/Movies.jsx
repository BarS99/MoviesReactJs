import React from "react";
import { MediaProvider } from "../contexts/MediaContext";
import { GenreProvider } from "../contexts/GenreContext";
import Filters from "../components/Filters";
import MediaList from "../components/MediaList";

const Media = () => {
  return (
    <GenreProvider>
      <MediaProvider data="movies">
        <Filters />
        <MediaList title="All movies" titleAsH1={true} />
      </MediaProvider>
    </GenreProvider>
  );
};

export default Media;
