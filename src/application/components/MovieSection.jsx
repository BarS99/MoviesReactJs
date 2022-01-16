import React, { useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import Media from "./Media";

const MovieList = (props) => {
  const { movies, loadFailed } = useContext(MovieContext);

  return (
    <div className="container my-4">
      <section className="movie__section">
        <h2 className="text-white fw-bold mb-4">Movie list</h2>
        {!loadFailed ? (
          <>
            {movies.length === 0 ? (
              <div className="my-5">
                <div className="alert alert-primary" role="alert">
                  The movie list is empty!
                </div>
              </div>
            ) : (
              <div className="row gy-4">
                {movies.map((item) => {
                  return (
                    <div className="col-6 col-md-4 col-lg-3" key={item.id}>
                      <Media media={item} />
                    </div>
                  );
                })}
              </div>
            )}
          </>
        ) : (
          <div className="my-5">
            <div className="alert alert-primary" role="alert">
              Failed to load the movies!
            </div>
          </div>
        )}
      </section>
    </div>
  );
};

export default MovieList;
