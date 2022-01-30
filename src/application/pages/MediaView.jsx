import React, { useState, useEffect } from "react";
import { Container, Alert, Image, Button, Badge } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import { API } from "../../API/definitions";

const MediaView = (props) => {
  let { id } = useParams();
  const [data] = useState(props.data);
  const [media, setMedia] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/${data}?id=${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .then((response) => {
        if (response.length) {
          setMedia(() => {
            return response[0];
          });
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .catch((error) => {
        setMedia(() => {
          return false;
        });
      });
  }, [data, id]);

  return (
    <Container className="mt-4">
      {media === false ? (
        <div className="my-5">
          <Alert variant="primary">Failed to fetch the data!</Alert>
        </div>
      ) : (
        <section className="media-view">
          <header className="media-view__header d-flex align-items-end flex-wrap text-white mb-4 pb-2 border-bottom border-dark">
            <h1 className="fs-1 fw-bold my-0 me-2">{media.title}</h1>
            <div className="text-light" role="presentation">
              By {media.director}
            </div>
          </header>
          <div className="media-view__content">
            <div className="media-view__image-wrapper float-md-start me-md-5 mb-md-3">
              <Image
                src={`${media.thumbnail}`}
                alt={media.title}
                fluid
                className="w-100"
              />
            </div>

            <section className="text-white my-4">
              <h2 className="fs-2 fw-bold mb-4 pb-2 border-bottom border-dark overflow-hidden">
                Description
              </h2>
              <div className="media-view__text lh-lg">{media.description}</div>
            </section>
            <section className="text-white my-4">
              <h2 className="fs-2 fw-bold mb-4 pb-2 border-bottom border-dark overflow-hidden">
                Genres
              </h2>
              <div className="media-view__list d-flex flex-wrap">
                {media.genre.map((item) => {
                  return (
                    <Badge bg="success" className="fs-6 p-2">
                      {item.toUpperCase()}
                    </Badge>
                  );
                })}
              </div>
            </section>
          </div>
          <div className="py-4 py-md-5 text-center w-100 overflow-hidden">
            <Button
              variant="danger"
              onClick={() => {
                navigate(-1);
              }}
            >
              Previous page
            </Button>
          </div>
        </section>
      )}
    </Container>
  );
};

export default MediaView;
