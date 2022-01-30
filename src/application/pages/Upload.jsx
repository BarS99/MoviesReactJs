import React from "react";
import { Container } from "react-bootstrap";
import { GenreProvider } from "../contexts/GenreContext";
import MediaUploader from "../components/MediaUploader";

const Upload = () => {
  return (
    <>
      <h1 className="visually-hidden">MoviesReactJS - upload</h1>
      <div className="my-4 my-lg-5">
        <GenreProvider>
          <Container>
            <MediaUploader />
          </Container>
        </GenreProvider>
      </div>
    </>
  );
};

export default Upload;
