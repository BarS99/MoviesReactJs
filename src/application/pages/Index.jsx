import React from "react";
import MainTop from "../components/MainTop";
import MediaList from "../components/MediaList";
import { MediaProvider } from "../contexts/MediaContext";
import HorizontalImage from "../components/HorizontalImage";
import Description from "../components/Description.jsx";

const Index = () => {
  return (
    <>
      <h1 className="visually-hidden">MoviesReactJS - main page</h1>
      <MainTop />
      <MediaProvider filters={{ limit: 12 }} data="movies">
        <MediaList title="Recently added movies" />
      </MediaProvider>
      <MediaProvider filters={{ limit: 12 }} data="series">
        <MediaList title="Recently added series" />
      </MediaProvider>
      <HorizontalImage />
      <Description />
    </>
  );
};

export default Index;
