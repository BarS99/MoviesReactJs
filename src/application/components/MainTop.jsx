import React, { useState } from "react";

const MainTop = () => {
  const [mainTop] = useState({
    image_sm: "images/mainTop/red_seats_576.jpg",
    image_lg: "images/mainTop/red_seats_992.jpg",
    image_full: "images/mainTop/red_seats_1920.jpg",
    alt: "People watching a movie in the cinema",
    title: "How the coronavirus hit cinemas",
    link: "https://www.google.pl/",
  });

  return (
    <section className="mainTop position-relative">
      <div className="mainTop__image">
        <img
          srcSet={`${mainTop.image_sm} 576w, ${mainTop.image_lg} 992w, ${mainTop.image_full} 1920w`}
          sizes="(min-width: 993px) 1920px, (min-width: 577px) 992px, 576px"
          src={mainTop.image_full}
          alt={mainTop.alt}
        />
      </div>
      <div className="mainTop__content position-absolute top-0 start-0 end-0 bottom-0 d-flex align-items-center">
        <div className="container">
          <h2 className="mainTop__title text-light display-4 fw-bold">
            {mainTop.title}
          </h2>
          <a
            href={mainTop.link}
            title="See more"
            className="btn btn-lg btn-contrast mt-4"
          >
            See more
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainTop;
