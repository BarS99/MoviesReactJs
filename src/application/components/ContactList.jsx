import React, { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { API } from "../../API/definitions";

const ContactList = () => {
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`${API}/contact`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .then((response) => {
        setContact(() => {
          return response;
        });
      })
      .catch((error) => {});
  }, []);

  return (
    <section>
      <h2 className="text-white fw-bold mb-4 fs-2">Contact messages</h2>
      {contact.length ? (
        <div>
          {contact.map((item) => {
            return (
              <article key={item.id} className="text-white mb-4">
                <address class="fs-5 mb-2 pb-2 border-bottom border-dark">
                  <span>Author: &nbsp;</span>
                  <a
                    rel="author"
                    href={`mailto:${item.email}`}
                    className="text-success fw-bold text-decoration-none"
                  >
                    {item.name}
                  </a>
                </address>
                <p role="presentation" className="lh-lg">
                  {item.message}
                </p>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="my-4">
          <Alert variant="primary">
            Loading contact messages was unsuccessful!
          </Alert>
        </div>
      )}
    </section>
  );
};

export default ContactList;
