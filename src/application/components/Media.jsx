import React from "react";
import { Card, Button } from "react-bootstrap";

const Media = ({ media }) => {
  return (
    <Card className="media">
      <Card.Img src={media.thumbnail}></Card.Img>
      <Card.Body>
        <Card.Title>{media.title}</Card.Title>
        <Button variant="primary" className="mt-2">
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Media;
