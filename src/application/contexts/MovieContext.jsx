import React, { createContext, useState, useEffect } from "react";
import { API } from "../../API/definitions.js";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([]);
  const [loadFailed, setLoadFailed] = useState(false);
  const [filters] = useState(props.filters);

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
        console.log();

        for (const filter in filters) {
          switch (filter) {
            case "limit":
              response = response.slice(0, filters[filter]);
              break;
            default:
              break;
          }
        }

        setMovies((movies) => {
          return [...movies, ...response];
        });
      })
      .catch((error) => {
        setLoadFailed(true);
      });

    return () => {};
  }, [filters]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, loadFailed }}>
      {props.children}
    </MovieContext.Provider>
  );
};
