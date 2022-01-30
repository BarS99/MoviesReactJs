import React from "react";
import { Container } from "react-bootstrap";
import { MediaProvider } from "../contexts/MediaContext";
import MediaTable from "../components/MediaTable";
import ContactList from "../components/ContactList";

const Panel = () => {
  return (
    <>
      <h1 className="visually-hidden">MoviesReactJS - control panel</h1>
      <div className="my-4 my-lg-5">
        <MediaProvider data="movies">
          <Container>
            <MediaTable title="All movies" />
          </Container>
        </MediaProvider>
        <MediaProvider data="series">
          <Container>
            <MediaTable title="All series" />
          </Container>
        </MediaProvider>
        <Container>
          <ContactList />
        </Container>
      </div>
    </>
  );
};

export default Panel;
