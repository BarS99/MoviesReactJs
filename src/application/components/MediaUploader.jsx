import React, { useContext, useState, useRef } from "react";
import { Form, Row, Col, Button, Alert } from "react-bootstrap";
import { GenreContext } from "../contexts/GenreContext";
import { API } from "../../API/definitions";

const MediaUploader = () => {
  const { genres } = useContext(GenreContext);
  const [form, setForm] = useState({
    message: {
      displayMessage: false,
      variant: "",
      text: "",
    },
  });
  const fileInput = useRef(null);

  /** Set a message for a user
   * @param {boolean} displayMessage Display message.
   * @param {string} variant Alert variant.
   * @param {string} variant Message to be displayed.
   */
  const setFormMessage = (displayMessage = false, variant = "", text = "") => {
    setForm((prev) => {
      let message = prev.message;
      message.displayMessage = displayMessage;
      message.variant = variant;
      message.text = text;

      return { ...prev, message: message };
    });
  };

  /** Upload a file as base64 to input
   * @param {Object} e Event object from the listener.
   * @param {HTMLElement} target HTML input where file as base64 will be stored.
   */
  const fileUpload = (e, target) => {
    if (e.target.files[0] !== null && e.target.files[0] !== undefined) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = () => {
        target.value = fileReader.result;
      };
      fileReader.onerror = () => {
        target.value = null;
      };
    }
  };

  /** Validate form fields after submit
   * @param {Object} data FormData object.
   * @returns {boolean} Returns true if no errors were found, otherwise false.
   */
  const validateFields = (data) => {
    let validateFields = [];

    for (const entries of data.entries()) {
      if (entries[1].length === 0) {
        validateFields.push(entries[0]);
      }
    }

    if (validateFields.length) {
      setFormMessage(
        true,
        "danger",
        `Following fields sholud not be empty: ${validateFields.join(", ")}`
      );

      return false;
    } else {
      return true;
    }
  };

  /** Upload a new media to the server
   * @param {Object} e Event object from the listener.
   * @param {Object} data FormData object from the form.
   */
  const uploadMedia = (e, data) => {
    e.preventDefault();
    const media = {
      title: "",
      director: "",
      genre: [],
      description: "",
      thumbnail: "",
    };
    let type = "";

    for (const entries of data.entries()) {
      switch (entries[0]) {
        case "type":
          type = entries[1];
          break;
        case "title":
          media.title = entries[1];
          break;
        case "director":
          media.director = entries[1];
          break;
        case "genre":
          media.genre.push(entries[1]);
          break;
        case "description":
          media.description = entries[1];
          break;
        case "thumbnail":
          media.thumbnail = entries[1];
          break;
        default:
          break;
      }
    }

    fetch(`${API}/${type}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(media), // body data type must match "Content-Type" header
    })
      .then((result) => {
        if (result.ok) {
          setFormMessage(true, "success", "Your data has been posted!");

          e.target.reset();
        } else {
          if (result.status === 413) {
            throw new Error("Image size is too large!");
          }
          throw new Error("Failed to post the data!");
        }
      })
      .catch((error) => {
        setFormMessage(true, "danger", error.message);
      });
  };

  return (
    <section className="my-4">
      <h2 className="text-white fw-bold mb-4 fs-2">Upload</h2>
      <Form
        className="form mt-4 px-4 pb-4 text-white border border-white"
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);

          if (validateFields(data)) {
            uploadMedia(e, data);
          }

          window.scrollTo(0, e.target.offsetTop - 56);
        }}
        encType="multipart/form-data"
      >
        {form.message.displayMessage && (
          <Alert
            variant={form.message.variant}
            className="mt-4 mb-0"
            dismissible
            onClick={() => {
              setFormMessage(false);
            }}
          >
            {form.message.text}
          </Alert>
        )}
        <Row>
          <Col sm={12} md={12} className="mt-4">
            <Form.Group controlId="type">
              <Form.Label className="fw-bold fs-5">Type</Form.Label>
              <Form.Select name="type">
                <option value="movies">Movie</option>
                <option value="series">Series</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} className="mt-4">
            <Form.Group controlId="title">
              <Form.Label className="fw-bold fs-5">Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                placeholder="Enter a title..."
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={6} className="mt-4">
            <Form.Group controlId="director">
              <Form.Label className="fw-bold fs-5">Director</Form.Label>
              <Form.Control
                type="text"
                name="director"
                placeholder="Enter a director..."
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} className="mt-4">
            <Form.Group controlId="genre">
              <Form.Label className="fw-bold fs-5">Genre</Form.Label>
              <Row>
                {genres.map((item) => {
                  return (
                    <Col xs={6} sm={4} md={3} key={item.id}>
                      <Form.Check
                        type="checkbox"
                        name="genre"
                        value={item.title}
                        label={item.title}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} className="mt-4">
            <Form.Group controlId="description">
              <Form.Label className="fw-bold fs-5">Description</Form.Label>
              <Form.Control
                type="text"
                name="description"
                placeholder="Enter a description..."
                as="textarea"
                className="form-control-textarea"
              />
            </Form.Group>
          </Col>
          <Col xs={12} sm={12} className="mt-4">
            <Form.Group controlId="thumbnail">
              <Form.Control type="hidden" name="thumbnail" ref={fileInput} />
            </Form.Group>
            <Form.Group controlId="thumbnailFile">
              <Form.Label className="fw-bold fs-5">Thumbnail</Form.Label>
              <Form.Control
                type="file"
                name="thumbnailFile"
                placeholder="Upload a thumbnail..."
                onChange={(e) => {
                  fileUpload(e, fileInput.current);
                }}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={12} className="mt-4">
            <div className="text-end">
              <Button type="submit" variant="danger">
                Upload
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
    </section>
  );
};

export default MediaUploader;
