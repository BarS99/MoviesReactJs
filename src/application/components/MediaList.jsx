import React, { useContext } from "react";
import { MediaContext } from "../contexts/MediaContext";
import Media from "./Media";
import { Container, Row, Col, Alert } from "react-bootstrap";

const MediaList = (props) => {
  const { media, loadFailed } = useContext(MediaContext);

  return (
    <Container className="container my-4">
      <section className="movie__section">
        <h2 className="text-white fw-bold mb-4">{props.title}</h2>
        {!loadFailed ? (
          <>
            {media.length === 0 ? (
              <div className="my-5">
                <Alert variant="primary">The movie list is empty!</Alert>
              </div>
            ) : (
              <Row className="gy-4">
                {media.map((item) => {
                  return (
                    <Col md="4" lg="3" className="d-flex" key={item.id}>
                      <Media media={item} />
                    </Col>
                  );
                })}
              </Row>
            )}
          </>
        ) : (
          <div className="my-5">
            <Alert variant="primary">Failed to load the data!</Alert>
          </div>
        )}
      </section>
    </Container>
  );
};

export default MediaList;
