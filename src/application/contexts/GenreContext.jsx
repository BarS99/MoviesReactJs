import React, { createContext, useState, useEffect } from "react";
import { API } from "../../API/definitions.js";

export const GenreContext = createContext();

export const GenreProvider = (props) => {
  const [genres, setGenres] = useState([]);
  const [loadFailed, setLoadFailed] = useState(false);

  useEffect(() => {
    fetch(`${API}/genres`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .then((response) => {
        setGenres((genres) => {
          return [...genres, ...response];
        });
      })
      .catch((error) => {
        setLoadFailed(true);
      });

    return () => {};
  }, []);

  return (
    <GenreContext.Provider value={{ genres, setGenres, loadFailed }}>
      {props.children}
    </GenreContext.Provider>
  );
};
