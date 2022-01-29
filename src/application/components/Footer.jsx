import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const Footer = () => {
  const [shortcuts] = useState([
    {
      title: "IMDB",
      link: "https://www.imdb.com/",
    },
    {
      title: "Filmweb",
      link: "https://www.filmweb.pl/",
    },
    {
      title: "Netflix",
      link: "https://www.netflix.com/",
    },
    {
      title: "HBO GO",
      link: "https://hbogo.pl/",
    },
  ]);

  const [recommended] = useState([
    {
      title: "Malesuada fames",
      link: "#",
    },
    {
      title: "In dictum ",
      link: "#",
    },
    {
      title: "Vivamus",
      link: "#",
    },
  ]);

  return (
    <footer className="footer mt-auto">
      <div className="footer__top text-white py-4 bg-dark">
        <Container>
          <Row>
            <Col xs={6} md={4}>
              <h2 className="footer__title h4">See also</h2>
              <ul className="footer__list m-0">
                {shortcuts.map((item, index) => {
                  return (
                    <li className="footer__list-item" key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
            <Col xs={6} md={4}>
              <h2 className="footer__title h4">Partners</h2>
              <ul className="footer__list m-0">
                {recommended.map((item, index) => {
                  return (
                    <li className="footer__list-item" key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noreferrer"
                        title={item.title}
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="footer__bottom text-white py-2 bg-danger">
        <Container>
          <Row>
            <Col
              xs={12}
              sm={6}
              className="d-flex justify-content-center justify-content-sm-start"
            >
              Copyright © All rights reserved!
            </Col>
            <Col
              xs={12}
              sm={6}
              className="d-flex justify-content-center justify-content-sm-end"
            >
              <address className="m-0">
                Created by&nbsp;
                <a
                  rel="author"
                  href="https://github.com/BarS99"
                  className="text-white"
                >
                  Bartłomiej Święch
                </a>
              </address>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
