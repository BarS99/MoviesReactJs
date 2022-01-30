import React, { useContext } from "react";
import { Table, Button, Alert, Spinner } from "react-bootstrap";
import { MediaContext } from "../contexts/MediaContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinusSquare } from "@fortawesome/free-solid-svg-icons";
import { API } from "../../API/definitions";

const MediaTable = (props) => {
  const { data, media, setMedia, loadFailed, isLoading } =
    useContext(MediaContext);

  const removeMedia = (id) => {
    fetch(`${API}/${data}/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          const newData = media.filter((item) => {
            return item.id !== id;
          });

          setMedia(() => {
            return newData;
          });
        } else {
          throw new Error("Removing data unsuccessful!");
        }
      })
      .catch(() => {
        return false;
      });
  };

  return (
    <section>
      <h2 className="text-white fw-bold mb-4 fs-2">{props.title}</h2>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" variant="white" />
        </div>
      ) : !loadFailed && media.length ? (
        <Table striped hover variant="dark" responsive="sm">
          <thead>
            <tr>
              <th className="align-middle" style={{ width: "40%" }}>
                Title
              </th>
              <th className="align-middle" style={{ width: "40%" }}>
                Director
              </th>
              <th className="text-center align-middle" style={{ width: "20%" }}>
                Remove the movie
              </th>
            </tr>
          </thead>
          <tbody>
            {media.map((item) => {
              return (
                <tr key={item.id}>
                  <td className="align-middle" style={{ width: "40%" }}>
                    {item.title}
                  </td>
                  <td className="align-middle" style={{ width: "40%" }}>
                    {item.director}
                  </td>
                  <td
                    className="align-middle text-center"
                    style={{ width: "20%" }}
                  >
                    <Button
                      className="bg-transparent border-0 p-0 m-0 fs-4"
                      onClick={() => {
                        removeMedia(item.id);
                      }}
                    >
                      <FontAwesomeIcon icon={faMinusSquare} className="me-2" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      ) : (
        <div className="my-5">
          <Alert variant="primary">Loading data was unsuccessful!</Alert>
        </div>
      )}
    </section>
  );
};

export default MediaTable;
