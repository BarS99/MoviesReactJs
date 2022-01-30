import React from "react";
import { Link } from "react-router-dom";
import { Card, Button } from "react-bootstrap";

const Media = ({ data, media }) => {
  return (
    <Card className="media border-0" as={Link} to={`/${data}-view/${media.id}`}>
      <Card.Img src={media.thumbnail} className="media__image-wrapper" />
      <Card.Body className="d-flex flex-column px-0">
        <Card.Title className="flex-grow-1 text-white">
          {media.title}
        </Card.Title>
        <Card.Text className="text-light" role="presentation">
          By {media.director}
        </Card.Text>
        <Button variant="danger" className="mt-2">
          See more
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Media;
