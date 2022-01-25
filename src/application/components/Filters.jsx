import React, { useContext, useEffect } from "react";
import { GenreContext } from "../contexts/GenreContext";
import { MovieContext } from "../contexts/MovieContext";
import { Form } from "react-bootstrap";
import { Container, Row, Col, Button } from "react-bootstrap";

const Filters = (props) => {
  const { genres } = useContext(GenreContext);
  const { filters, setFilters } = useContext(MovieContext);

  return (
    <Container>
      <Form
        className="my-4 p-4 bg-light rounded"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);

          setFilters((prev) => {
            let filters = [...prev];

            for (const entries of data.entries()) {
              filters[entries[0]] = entries[1];
            }

            return filters;
          });
        }}
      >
        <Row>
          <Col sm={6} md={4} lg={3}>
            <Form.Group controlId="movie_title">
              <Form.Label className="fw-bold fs-5">Title</Form.Label>
              <Form.Control
                type="text"
                name="movie_title"
                placeholder="Search for a title"
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Form.Group controlId="movie_director">
              <Form.Label className="fw-bold fs-5">Director</Form.Label>
              <Form.Control
                type="text"
                name="movie_director"
                placeholder="Search for a director"
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={4} lg={3}>
            <Form.Group controlId="movie_genre">
              <Form.Label className="fw-bold fs-5">Genre</Form.Label>
              <Form.Select name="movie_genre">
                {genres.map((item) => {
                  return (
                    <option key={item.id}>
                      {item.title.charAt(0).toUpperCase() + item.title.slice(1)}
                    </option>
                  );
                })}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col sm={6} md={4} lg={3} className="d-flex align-items-end">
            <Button type="submit" variant="danger" className="w-100">
              Apply filters
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Filters;
