import React, { createContext, useState, useEffect } from "react";
import { API } from "../../API/definitions.js";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    fetch(`${API}/movies`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .then((response) => {
        if (response.length === 0) {
          return [...movies];
        } else {
          setMovies((movies) => {
            return [...movies, ...response];
          });
        }
      })
      .catch((error) => {
        setLoadFailed(true);
      });

    return () => {};
  }, []);

  return (
    <MovieContext.Provider value={{ movies, setMovies, loadFailed }}>
      {props.children}
    </MovieContext.Provider>
  );
};
