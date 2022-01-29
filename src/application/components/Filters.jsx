import React, { useContext } from "react";
import { GenreContext } from "../contexts/GenreContext";
import { MediaContext } from "../contexts/MediaContext";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

const Filters = (props) => {
  const { genres } = useContext(GenreContext);
  const { setFilters } = useContext(MediaContext);

  return (
    <Container>
      <Form
        className="form my-4 px-4 pb-4 bg-dark text-white"
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
          <Col sm={6} md={4} className="mt-4">
            <Form.Group controlId="title">
              <Form.Label className="fw-bold fs-5">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Search for a title..."
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={4} className="mt-4">
            <Form.Group controlId="director">
              <Form.Label className="fw-bold fs-5">Director</Form.Label>
              <Form.Control
                type="text"
                name="director"
                placeholder="Search for a director..."
              />
            </Form.Group>
          </Col>
          <Col sm={6} md={4} className="mt-4">
            <Form.Group controlId="genre">
              <Form.Label className="fw-bold fs-5">Genre</Form.Label>
              <Form.Select name="genre" defaultValue="">
                <option value="" disabled hidden>
                  Select a genre...
                </option>
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
        </Row>
        <Row className="justify-content-center">
          <Col sm={6} md={4} className="d-flex align-items-end mt-4">
            <Button type="submit" variant="danger" className="w-100">
              Apply filters
            </Button>
          </Col>
          <Col sm={6} md={4} className="d-flex align-items-end mt-2 mt-sm-4">
            <Button type="reset" variant="secondary" className="w-100">
              Reset filters
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default Filters;
