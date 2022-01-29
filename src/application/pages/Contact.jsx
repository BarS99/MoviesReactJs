import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { API } from "../../API/definitions";

const Contact = () => {
  const [contact] = useState({
    image_lg: "images/contact/contact_bg_992.jpg",
    image_alt: "Popcorn",
    list: [
      {
        title: "Phone",
        type: "phone",
        content: "(+48) 555 555 555",
      },
      {
        title: "Email",
        type: "email",
        content: "bartlomiejswiech99@gmail.com",
      },
      {
        title: "Address",
        type: "text",
        content: "23 Main Street, New York, NY 10030",
      },
    ],
  });
  const [form, setForm] = useState({
    message: {
      displayMessage: false,
      variant: "",
      text: "",
    },
  });

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
      setForm((prev) => {
        let message = prev.message;
        message.text = `Following fields sholud not be empty: ${validateFields.join(
          ", "
        )}`;
        message.displayMessage = true;
        message.variant = "danger";

        return { ...prev, message: message };
      });

      return false;
    } else {
      return true;
    }
  };

  /** Send a message to API
   * @param {Object} data FormData object.
   * @returns {boolean} Returns true if no errors were found, otherwise false.
   */
  const sendMessage = (API, name, email, message) => {
    fetch(`${API}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        setForm((prev) => {
          let message = prev.message;
          message.text = "Your message has been sent!";
          message.displayMessage = true;
          message.variant = "success";

          return { ...prev, message: message };
        });

        return true;
      })
      .catch((error) => {
        return false;
      });
  };

  /** Renders JSX of given type
   * @param {string} type Type of expected output. Following values are acceptable: "phone", "email", "text"
   * @param {string} content Value of the element.
   * @returns {(Object|boolean)} Returns JSX if no errors were found, otherwise false.
   */
  const renderListContent = (type, content) => {
    let value = false;

    switch (type) {
      case "phone":
        value = (
          <a href={`tel:${content.replace(/ /g, "")}`} title={`${content}`}>
            {content}
          </a>
        );
        break;
      case "email":
        value = (
          <a href={`mailto:${content}`} title={`${content}`}>
            {content}
          </a>
        );
        break;
      case "text":
        value = <p>{content}</p>;
        break;
      default:
        break;
    }

    return value;
  };

  return (
    <div className="contact">
      <div className="contact__image-wrapper me-3 float-start w-50 d-none d-xxl-block">
        <img
          className="img-fluid"
          src={contact.image_lg}
          alt={contact.image_alt}
        />
      </div>

      <Container>
        <div className="contact__content mx-auto py-4 text-white">
          <div className="text-danger fw-bold fs-2" aria-hidden="true">
            Contact
          </div>
          <h1 className="contact__title fw-light">
            Contact <span className="fw-bold">Us</span>
          </h1>
          <div className="contact__list-wrapper">
            <ul className="contact__list">
              {contact.list.map((item, index) => {
                return (
                  <li className="contact__list-item text-white" key={index}>
                    <div className="contact__list-title fw-bold mb-1">
                      {item.title}
                    </div>
                    <div className="fs-5 fw-bold">
                      {renderListContent(item.type, item.content)}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <Form
            className="contact__form mt-4 px-4 pb-4 text-white border border-white"
            onSubmit={(e) => {
              e.preventDefault();
              const data = new FormData(e.target);

              if (validateFields(data)) {
                sendMessage(
                  API,
                  data.get("name"),
                  data.get("email"),
                  data.get("text")
                );

                e.target.reset();
              }
            }}
          >
            {form.message.displayMessage && (
              <Alert
                variant={form.message.variant}
                className="mt-4 mb-0"
                dismissible
                onClick={() => {
                  setForm((prev) => {
                    return {
                      ...prev,
                      message: { ...prev.message, displayMessage: false },
                    };
                  });
                }}
              >
                {form.message.text}
              </Alert>
            )}
            <Row>
              <Col xs={12} sm={6} className="mt-4">
                <Form.Group controlId="name">
                  <Form.Label className="fw-bold fs-5">Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Search for a name..."
                  />
                </Form.Group>
              </Col>
              <Col xs={12} sm={6} className="mt-4">
                <Form.Group controlId="email">
                  <Form.Label className="fw-bold fs-5">
                    E-mail address
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Search for an e-mail..."
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} className="mt-4">
                <Form.Group controlId="text">
                  <Form.Label className="fw-bold fs-5">Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="text"
                    placeholder="Your message..."
                    className="form-control-textarea"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs={12} sm={12} className="mt-4">
                <div className="text-end">
                  <Button type="submit" variant="danger">
                    Send message
                  </Button>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
