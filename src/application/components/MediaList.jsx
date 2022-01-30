import React, { useContext } from "react";
import { MediaContext } from "../contexts/MediaContext";
import Media from "./Media";
import { Container, Row, Col, Alert, Spinner } from "react-bootstrap";

const MediaList = (props) => {
  const { data, media, loadFailed, isLoading } = useContext(MediaContext);

  return (
    <Container className="container my-4">
      <section className="movie__section">
        <h2 className="text-white fw-bold mb-4 fs-2">{props.title}</h2>
        {isLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="white" />
          </div>
        ) : !loadFailed ? (
          <>
            {media.length === 0 ? (
              <div className="my-5">
                <Alert variant="primary">The movie list is empty!</Alert>
              </div>
            ) : (
              <Row className="gy-4">
                {media.map((item) => {
                  return (
                    <Col xs="6" md="4" lg="3" className="d-flex" key={item.id}>
                      <Media media={item} data={data} />
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
