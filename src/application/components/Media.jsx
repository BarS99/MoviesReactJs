import React from "react";
import { Card, Button } from "react-bootstrap";

const Media = ({ media }) => {
  return (
    <Card className="media">
      <Card.Img src={media.thumbnail} />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="flex-grow-1">{media.title}</Card.Title>
        <Card.Text>By {media.director}</Card.Text>
        <Button variant="primary" className="mt-2">
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Media;
