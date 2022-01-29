import React from "react";
import { MediaProvider } from "../contexts/MediaContext";
import { GenreProvider } from "../contexts/GenreContext";
import Filters from "../components/Filters";
import MediaList from "../components/MediaList";

const Series = () => {
  return (
    <GenreProvider>
      <MediaProvider data="series">
        <Filters />
        <MediaList title="All series" titleAsH1={true} />
      </MediaProvider>
    </GenreProvider>
  );
};

export default Series;
