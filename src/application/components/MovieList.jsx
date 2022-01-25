import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Media from "./Media";
import { Container, Row, Col, Alert } from "react-bootstrap";

const MovieList = (props) => {
  const { movies, loadFailed } = useContext(MovieContext);

  return (
    <Container className="container my-4">
      <section className="movie__section">
        <h2 className="text-white fw-bold mb-4">{props.title}</h2>
        {!loadFailed ? (
          <>
            {movies.length === 0 ? (
              <div className="my-5">
                <Alert variant="primary">The movie list is empty!</Alert>
              </div>
            ) : (
              <Row className="gy-4">
                {movies.map((item) => {
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
            <Alert variant="primary">Failed to load the movies!</Alert>
          </div>
        )}
      </section>
    </Container>
  );
};

export default MovieList;
