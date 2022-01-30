import React from "react";
import { Container, Alert } from "react-bootstrap";

const Page404 = () => {
  return (
    <section>
      <h1 className="visually-hidden">
        MoviesReactJS - this page doesn't exist!
      </h1>
      <Container className="my-5">
        <Alert variant="primary">404 Not found!</Alert>
      </Container>
    </section>
  );
};

export default Page404;
