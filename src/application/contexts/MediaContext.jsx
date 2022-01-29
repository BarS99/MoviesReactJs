import React, { createContext, useState, useEffect } from "react";
import { API } from "../../API/definitions.js";

export const MediaContext = createContext();

export const MediaProvider = (props) => {
  const [media, setMedia] = useState([]);
  const [loadFailed, setLoadFailed] = useState(false);
  const [data] = useState(props.data);
  const [filters, setFilters] = useState((prev) => {
    if (props.filters === undefined || props.filters === null) {
      return [];
    }

    return props.filters;
  });

  useEffect(() => {
    fetch(`${API}/${data}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to fetch the data!");
        }
      })
      .then((response) => {
        for (const filter in filters) {
          switch (filter) {
            case "limit":
              response = response.slice(0, filters[filter]);
              break;
            case "title":
              response = response.filter((item) => {
                return item.title
                  .toLowerCase()
                  .includes(filters[filter].toLowerCase());
              });
              break;
            case "director":
              response = response.filter((item) => {
                return item.director
                  .toLowerCase()
                  .includes(filters[filter].toLowerCase());
              });
              break;
            case "genre":
              response = response.filter((item) => {
                return item.genres.includes(filters[filter].toLowerCase());
              });
              break;
            default:
              break;
          }
        }

        setMedia((media) => {
          return [...response];
        });
      })
      .catch((error) => {
        setLoadFailed(true);
      });

    return () => {};
  }, [filters, data]);

  return (
    <MediaContext.Provider value={{ media, loadFailed, filters, setFilters }}>
      {props.children}
    </MediaContext.Provider>
  );
};
