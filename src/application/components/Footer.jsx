import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-4">
      <div className="footer__top text-white py-4 bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-4">
              <h2 className="footer__title h4">Shortcuts</h2>
              <ul className="footer__list m-0">
                <li className="footer__list-item">
                  <a href="#" title="">
                    Sed rutrum ipsum vel
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" title="">
                    Nullam molestie nisi eget
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" title="">
                    Curabitur volutpat
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-4">
              <h2 className="footer__title h4">Recommended categories</h2>
              <ul className="footer__list m-0">
                <li className="footer__list-item">
                  <a href="#" title="">
                    Interdum et malesuada fames
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" title="">
                    In dictum tellus eget mauris efficitur
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" title="">
                    Nullam
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" title="">
                    Id sollicitudin
                  </a>
                </li>
                <li className="footer__list-item">
                  <a href="#" title="">
                    Vivamus
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom text-white py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-start">
              Copyright © All rights reserved!
            </div>
            <div className="col-12 col-sm-6 d-flex justify-content-center justify-content-sm-end">
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
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
